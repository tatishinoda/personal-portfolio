import ClientPortfolio from "@/app/portfolio-client";
import { type GitHubRepository, getStarredRepositories } from "@/lib/github";

// Cores para os projetos (usando como default se não houver tema)
const colorPalette = [
  "#bd93f9", // roxo
  "#8be9fd", // azul
  "#50fa7b", // verde
  "#ffb86c", // laranja
  "#ff79c6", // rosa
  "#f1fa8c", // amarelo
];

function getColorForTech(language: string | null, index: number): string {
  if (!language) return colorPalette[index % colorPalette.length];

  // Map linguagens para cores
  const langColorMap: Record<string, string> = {
    typescript: "#3178c6",
    javascript: "#f1fa8c",
    python: "#3776ab",
    rust: "#ce422b",
    go: "#00add8",
    java: "#c21325",
    react: "#61dafb",
    vue: "#4fc08d",
  };

  return (
    langColorMap[language.toLowerCase()] ||
    colorPalette[index % colorPalette.length]
  );
}

function transformGitHubRepo(repo: GitHubRepository, index: number) {
  return {
    name: repo.name,
    description:
      repo.description || "Repositório marcado com estrela no GitHub",
    tech: repo.topics.length > 0 ? repo.topics : [repo.language || "Code"],
    link: repo.html_url,
    color: getColorForTech(repo.language, index),
    stars: repo.stargazers_count,
  };
}

export default async function Portfolio() {
  let projects = [];

  try {
    const starredRepos = await getStarredRepositories();
    // Pega todos os repositórios pinned (em destaque no perfil)
    projects = starredRepos.map(transformGitHubRepo);
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    // Usa projeto padrão em caso de erro
    projects = [
      {
        name: "github-api-error",
        description:
          "Não foi possível conectar com o GitHub no momento. Verifique suas credenciais em .env.local",
        tech: ["GitHub API"],
        link: "https://docs.github.com/en/rest",
        color: "#bd93f9",
        stars: 0,
      },
    ];
  }

  return <ClientPortfolio initialProjects={projects} />;
}
