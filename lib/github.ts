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
    throw new Error("GITHUB_TOKEN e GITHUB_USERNAME precisam ser configurados");
  }

  try {
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

    if (!response.ok) {
      throw new Error(`GitHub API retornou ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error(data.errors[0].message);
    }

    // Transformar resposta GraphQL para o formato esperado
    const repos: GitHubRepository[] = (
      data.data?.user?.pinnedItems?.nodes || []
    ).map(
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

    return repos;
  } catch (error) {
    console.error("Erro ao buscar repositórios pinned do GitHub:", error);
    return [];
  }
}
