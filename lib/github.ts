export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
}

export async function getStarredRepositories(): Promise<GitHubRepository[]> {
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_USERNAME) {
    const msg = "GITHUB_TOKEN e GITHUB_USERNAME precisam ser configurados";
    console.error(msg);
    throw new Error(msg);
  }

  try {
    console.log(
      `[GitHub API] Buscando repositórios pinned para: ${process.env.GITHUB_USERNAME}`,
    );

    // GraphQL query para buscar repositórios pinned (em destaque)
    const query = `
      query {
        user(login: "${process.env.GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                primaryLanguage {
                  name
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                stargazerCount
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    console.log(
      `[GitHub API] Response status: ${response.status} ${response.statusText}`,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[GitHub API] Error response: ${errorText}`);
      throw new Error(
        `GitHub API retornou ${response.status}: ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error(
        "[GitHub API] GraphQL errors:",
        JSON.stringify(data.errors),
      );
      throw new Error(
        `GraphQL Error: ${data.errors.map((e: { message: string }) => e.message).join(", ")}`,
      );
    }

    // Verificar se temos dados
    const pinnedItems = data.data?.user?.pinnedItems?.nodes;
    if (!pinnedItems || pinnedItems.length === 0) {
      console.warn(
        "[GitHub API] Nenhum repositório pinned encontrado para usuario",
      );
    } else {
      console.log(
        `[GitHub API] Encontrados ${pinnedItems.length} repositórios pinned`,
      );
    }

    // Transformar resposta GraphQL para o formato esperado
    const repos: GitHubRepository[] = (pinnedItems || []).map(
      (repo: {
        name: string;
        description: string | null;
        url: string;
        primaryLanguage: { name: string } | null;
        repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
        stargazerCount: number;
      }) => ({
        id: Math.random(), // GraphQL não retorna ID simples, usar random
        name: repo.name,
        description: repo.description,
        html_url: repo.url,
        topics: repo.repositoryTopics.nodes.map((t) => t.topic.name),
        language: repo.primaryLanguage?.name || null,
        stargazers_count: repo.stargazerCount,
      }),
    );

    console.log("[GitHub API] ✓ Repositórios carregados com sucesso");
    return repos;
  } catch (error) {
    console.error(
      "[GitHub API] ✗ Erro ao buscar repositórios pinned:",
      error instanceof Error ? error.message : String(error),
    );
    return [];
  }
}
