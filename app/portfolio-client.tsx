"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  color: string;
  stars?: number;
}

interface ProjectsSectionProps {
  isMobile: boolean;
  projects: Project[];
}

const aboutMe = {
  name: "Tatiane Gabrielle",
  role: "Front End Developer",
  bio: [
    "Olá! Sou desenvolvedora apaixonada por criar experiências digitais que unem funcionalidade e design.",
    "Trabalho com tecnologias modernas do ecossistema JavaScript/TypeScript, com foco em React, Next.js e Node.js.",
    "Quando não estou codando, estou explorando novos frameworks, contribuindo para open source ou tomando café enquanto leio sobre arquitetura de software.",
  ],
  avatar: "TG",
};

const skills = [
  {
    category: "Frontend",
    items: [
      "CSS3",
      "HTML5",
      "JavaScript",
      "Sass",
      "Bootstrap",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "WordPress",
    ],
  },
  { category: "Ferramentas", items: ["Git", "Figma", "VS Code", "GitHub"] },
];

const contact = [
  {
    label: "GitHub",
    value: "github.com/tatishinoda",
    href: "https://github.com/tatishinoda",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tatianegabrielle",
    href: "https://linkedin.com/in/tatianegabrielle",
    icon: "⎋",
  },
  {
    label: "Email",
    value: "hello@tatishinoda.com",
    href: "mailto:hello@tatishinoda.com",
    icon: "⊠",
  },
];

const tabs = [
  {
    id: "about",
    label: "sobre-mim.tsx",
    short: "Sobre",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "projetos.tsx",
    short: "Projetos",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "skills.tsx",
    short: "Skills",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "contato.tsx",
    short: "Contato",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

function LineNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: "2.2rem",
        textAlign: "right",
        marginRight: "1.2rem",
        color: "#6272a4",
        userSelect: "none",
        flexShrink: 0,
        fontSize: 13,
      }}
    >
      {n}
    </span>
  );
}

function AboutSection({ isMobile }: { isMobile: boolean }) {
  const p = isMobile ? "1.2rem 1rem" : "2rem 2.5rem";
  return (
    <div style={{ padding: p }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #bd93f9, #ff79c6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 600,
            color: "#f8f8f2",
            flexShrink: 0,
          }}
        >
          {aboutMe.avatar}
        </div>
        <div>
          <h1
            style={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: 600,
              color: "#f8f8f2",
            }}
          >
            {aboutMe.name}
          </h1>
          <p style={{ color: "#50fa7b", fontSize: 12, marginTop: 2 }}>
            {aboutMe.role}
          </p>
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: isMobile ? 12.5 : 13.5,
          lineHeight: 1.9,
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={1} />
          <span style={{ minWidth: 0, wordBreak: "break-word" }}>
            <span style={{ color: "#ff79c6" }}>const </span>
            <span style={{ color: "#8be9fd" }}>bio</span>
            <span style={{ color: "#f8f8f2" }}> = {"{"}</span>
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={2} />
          <span
            style={{
              paddingLeft: "1.5rem",
              minWidth: 0,
              wordBreak: "break-word",
            }}
          >
            <span style={{ color: "#f1fa8c" }}>name</span>
            <span style={{ color: "#f8f8f2" }}>: </span>
            <span style={{ color: "#f1fa8c" }}>&quot;{aboutMe.name}&quot;</span>
            <span style={{ color: "#f8f8f2" }}>,</span>
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={3} />
          <span
            style={{
              paddingLeft: "1.5rem",
              minWidth: 0,
              wordBreak: "break-word",
            }}
          >
            <span style={{ color: "#f1fa8c" }}>role</span>
            <span style={{ color: "#f8f8f2" }}>: </span>
            <span style={{ color: "#f1fa8c" }}>&quot;{aboutMe.role}&quot;</span>
            <span style={{ color: "#f8f8f2" }}>,</span>
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={4} />
          <span
            style={{
              paddingLeft: "1.5rem",
              minWidth: 0,
              wordBreak: "break-word",
            }}
          >
            <span style={{ color: "#8be9fd" }}>about</span>
            <span style={{ color: "#f8f8f2" }}>: [</span>
          </span>
        </div>
        {aboutMe.bio.map((line, i) => (
          <div key={line} style={{ display: "flex", minWidth: 0 }}>
            <LineNumber n={5 + i} />
            <span
              style={{
                paddingLeft: "3rem",
                minWidth: 0,
                wordBreak: "break-word",
              }}
            >
              <span style={{ color: "#f1fa8c" }}>&quot;{line}&quot;</span>
              <span style={{ color: "#f8f8f2" }}>
                {i < aboutMe.bio.length - 1 ? "," : ""}
              </span>
            </span>
          </div>
        ))}
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={5 + aboutMe.bio.length} />
          <span
            style={{ paddingLeft: "1.5rem", color: "#f8f8f2", minWidth: 0 }}
          >
            ]
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={6 + aboutMe.bio.length} />
          <span style={{ color: "#ff79c6", minWidth: 0 }}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection({ isMobile, projects }: ProjectsSectionProps) {
  const p = isMobile ? "1.2rem 1rem" : "2rem 2.5rem";
  return (
    <div style={{ padding: p }}>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 2,
          marginBottom: "1rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={1} />
          <span
            style={{ color: "#6272a4", minWidth: 0, wordBreak: "break-word" }}
          >
            {"// meus repositórios em destaque"}
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={2} />
          <span style={{ minWidth: 0, wordBreak: "break-word" }}>
            <span style={{ color: "#ff79c6" }}>const </span>
            <span style={{ color: "#8be9fd" }}>projects</span>
            <span style={{ color: "#f8f8f2" }}> = [</span>
          </span>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "0.8rem",
          marginLeft: isMobile ? 0 : "3.5rem",
        }}
      >
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: "#21222c",
              border: "1px solid #44475a",
              borderLeft: `3px solid ${proj.color}`,
              borderRadius: 6,
              padding: "0.9rem 1.1rem",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              height: "100%",
              display: "block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2d2f3e";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#21222c";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{ color: proj.color, fontSize: 12, flexShrink: 0 }}
                  >
                    ◆
                  </span>
                  <span
                    style={{
                      color: "#f8f8f2",
                      fontWeight: 500,
                      fontSize: 13,
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {proj.name}
                  </span>
                </div>
                {proj.stars !== undefined && proj.stars > 0 && (
                  <span
                    style={{
                      color: "#ffb86c",
                      fontSize: 11,
                      flexShrink: 0,
                      marginLeft: "auto",
                    }}
                  >
                    ⭐ {proj.stars}
                  </span>
                )}
              </div>
              <p
                style={{
                  color: "#6272a4",
                  fontSize: 12,
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}
              >
                {proj.description}
              </p>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#343746",
                      color: proj.color,
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 3,
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 2,
          marginTop: "1rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={3 + projects.length} />
          <span style={{ color: "#f8f8f2", minWidth: 0 }}>]</span>
        </div>
      </div>
    </div>
  );
}

function SkillsSection({ isMobile }: { isMobile: boolean }) {
  const p = isMobile ? "1.2rem 1rem" : "2rem 2.5rem";
  return (
    <div style={{ padding: p }}>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 2,
          marginBottom: "1rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={1} />
          <span
            style={{ color: "#6272a4", minWidth: 0, wordBreak: "break-word" }}
          >
            {"// tecnologias que utilizo"}
          </span>
        </div>
      </div>
      {skills.map((group, gi) => (
        <div key={group.category} style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: "0.6rem",
            }}
          >
            <LineNumber n={gi + 2} />
            <span style={{ color: "#ff79c6", fontSize: 13 }}>{"// "}</span>
            <span style={{ color: "#8be9fd", fontSize: 13, fontWeight: 500 }}>
              {group.category}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 7,
              paddingLeft: isMobile ? "2.5rem" : "5.5rem",
            }}
          >
            {group.items.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#21222c",
                  border: "1px solid #44475a",
                  color: "#f8f8f2",
                  fontSize: 12,
                  padding: "4px 12px",
                  borderRadius: 4,
                  fontFamily: "'Fira Code', monospace",
                  transition: "border-color 0.2s, color 0.2s",
                  cursor: "default",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactSection({ isMobile }: { isMobile: boolean }) {
  const [copied, setCopied] = useState<string | null>(null);
  const p = isMobile ? "1.2rem 1rem" : "2rem 2.5rem";
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <div style={{ padding: p }}>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 2,
          marginBottom: "1rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={1} />
          <span
            style={{ color: "#6272a4", minWidth: 0, wordBreak: "break-word" }}
          >
            {"// vamos conversar?"}
          </span>
        </div>
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={2} />
          <span style={{ fontSize: 13, minWidth: 0, wordBreak: "break-word" }}>
            <span style={{ color: "#ff79c6" }}>function </span>
            <span style={{ color: "#50fa7b" }}>getInTouch</span>
            <span style={{ color: "#f8f8f2" }}>(</span>
            <span style={{ color: "#ffb86c" }}>via</span>
            <span style={{ color: "#f8f8f2" }}>: string) {"{"}</span>
          </span>
        </div>
      </div>
      <div
        style={{
          paddingLeft: isMobile ? 0 : "3.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          minWidth: 0,
        }}
      >
        {contact.map((c) => (
          <div
            key={c.label}
            style={{
              background: "#21222c",
              border: "1px solid #44475a",
              borderRadius: 6,
              padding: "0.9rem 1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  color: "#bd93f9",
                  fontSize: 18,
                  minWidth: 22,
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </span>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{ color: "#6272a4", fontSize: 11, marginBottom: 1 }}
                >
                  {c.label}
                </div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8be9fd",
                    fontSize: isMobile ? 11 : 13,
                    textDecoration: "none",
                    wordBreak: "break-all",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  {c.value}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(c.value)}
              style={{
                background: copied === c.value ? "#343746" : "transparent",
                border: "1px solid",
                borderColor: copied === c.value ? "#50fa7b" : "#44475a",
                color: copied === c.value ? "#50fa7b" : "#6272a4",
                borderRadius: 4,
                padding: "4px 10px",
                fontSize: 11,
                cursor: "pointer",
                fontFamily: "'Fira Code', monospace",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              {copied === c.value ? "✓" : "copiar"}
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 2,
          marginTop: "1rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", minWidth: 0 }}>
          <LineNumber n={3 + contact.length} />
          <span style={{ color: "#f8f8f2", minWidth: 0 }}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  activeTab,
  onSelect,
  isMobile,
  open,
  onClose,
}: {
  activeTab: string;
  onSelect: (id: string) => void;
  isMobile: boolean;
  open: boolean;
  onClose: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile || !open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobile, open, onClose]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const sidebarContent = (
    <div
      ref={sidebarRef}
      style={{
        width: 220,
        background: "#252636",
        borderRight: "1px solid #191a21",
        overflowY: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px 6px",
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "#6272a4",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 600,
            fontFamily: "'Fira Code', monospace",
          }}
        >
          Explorer
        </span>
        {isMobile && (
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#6272a4",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: 1,
              padding: "0 2px",
            }}
            aria-label="Fechar"
          >
            ✕
          </button>
        )}
      </div>

      <div
        style={{
          fontSize: 11,
          color: "#bd93f9",
          padding: "4px 12px 2px",
          fontWeight: 500,
          fontFamily: "'Fira Code', monospace",
        }}
      >
        ▾ portfolio
      </div>

      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            onSelect(tab.id);
            if (isMobile) onClose();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            textAlign: "left",
            background: activeTab === tab.id ? "#44475a" : "transparent",
            border: "none",
            color: activeTab === tab.id ? "#f8f8f2" : "#8f9dc4",
            padding: "6px 12px 6px 24px",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "'Fira Code', monospace",
            borderLeft:
              activeTab === tab.id
                ? "2px solid #bd93f9"
                : "2px solid transparent",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            if (activeTab !== tab.id)
              (e.currentTarget as HTMLButtonElement).style.background =
                "#343746";
          }}
          onMouseLeave={(e) => {
            if (activeTab !== tab.id)
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
          }}
        >
          <span
            style={{
              color: activeTab === tab.id ? "#bd93f9" : "#6272a4",
              flexShrink: 0,
            }}
          >
            {tab.icon}
          </span>
          <span>📄 {tab.label}</span>
        </button>
      ))}
    </div>
  );

  if (!isMobile) {
    return open ? (
      <div style={{ width: 220, flexShrink: 0, height: "100%" }}>
        {sidebarContent}
      </div>
    ) : null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Fechar menu lateral"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          border: "none",
          padding: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 40,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
          cursor: open ? "pointer" : "default",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: 240,
          zIndex: 50,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "4px 0 24px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {sidebarContent}
      </div>
    </>
  );
}

export default function ClientPortfolio({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [activeTab, setActiveTab] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
    else setSidebarOpen(true);
  }, [isMobile]);

  // Atualizar title da página conforme muda a aba
  useEffect(() => {
    const currentTabObj = tabs.find((t) => t.id === activeTab) ?? tabs[0];
    const pageTitle = `${currentTabObj.short} | ${aboutMe.name} – Portfólio`;
    document.title = pageTitle;
  }, [activeTab]);

  const sectionContent: Record<string, React.ReactNode> = {
    about: <AboutSection isMobile={isMobile} />,
    projects: (
      <ProjectsSection isMobile={isMobile} projects={initialProjects} />
    ),
    skills: <SkillsSection isMobile={isMobile} />,
    contact: <ContactSection isMobile={isMobile} />,
  };

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        background: "#1e1f29",
        overflow: "hidden",
      }}
    >
      {!isMobile && (
        <div
          style={{
            height: 32,
            background: "#191a21",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 8,
            flexShrink: 0,
            borderBottom: "1px solid #1a1b22",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ff5555",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ffb86c",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#50fa7b",
              }}
            />
          </div>
          <span
            style={{
              color: "#6272a4",
              fontSize: 12,
              marginLeft: 8,
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {currentTab.label} — {aboutMe.name}
          </span>
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            height: 24,
            background: "#21222c",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 16,
            flexShrink: 0,
            borderBottom: "1px solid #191a21",
          }}
        >
          {[
            "Arquivo",
            "Editar",
            "Selecionar",
            "Exibir",
            "Ir",
            "Executar",
            "Terminal",
          ].map((m) => (
            <span
              key={m}
              style={{
                color: "#6272a4",
                fontSize: 12,
                cursor: "default",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {m}
            </span>
          ))}
        </div>
      )}

      {isMobile && (
        <div
          style={{
            height: 48,
            background: "#191a21",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            flexShrink: 0,
            borderBottom: "1px solid #1a1b22",
          }}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              color: "#6272a4",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
            aria-label="Abrir menu"
          >
            <div
              style={{
                width: 18,
                height: 1.5,
                background: "#6272a4",
                borderRadius: 1,
              }}
            />
            <div
              style={{
                width: 14,
                height: 1.5,
                background: "#6272a4",
                borderRadius: 1,
              }}
            />
            <div
              style={{
                width: 18,
                height: 1.5,
                background: "#6272a4",
                borderRadius: 1,
              }}
            />
          </button>
          <span
            style={{
              color: "#f8f8f2",
              fontSize: 13,
              fontFamily: "'Fira Code', monospace",
              fontWeight: 500,
            }}
          >
            {aboutMe.name}
          </span>
          <span
            style={{
              color: "#bd93f9",
              fontSize: 10,
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {currentTab.label}
          </span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!isMobile && (
          <div
            style={{
              width: 48,
              background: "#21222c",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 8,
              gap: 4,
              flexShrink: 0,
              borderRight: "1px solid #191a21",
            }}
          >
            {[
              {
                icon: "⬡",
                title: "Explorer",
                action: () => setSidebarOpen(!sidebarOpen),
              },
              { icon: "⌕", title: "Search" },
              { icon: "⌥", title: "Git" },
              { icon: "⊡", title: "Extensions" },
            ].map(({ icon, title, action }) => (
              <button
                type="button"
                key={title}
                title={title}
                onClick={action}
                style={{
                  width: 36,
                  height: 36,
                  background: "transparent",
                  border: "none",
                  color:
                    title === "Explorer" && sidebarOpen ? "#f8f8f2" : "#6272a4",
                  fontSize: 18,
                  cursor: "pointer",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f8f8f2";
                }}
                onMouseLeave={(e) => {
                  if (!(title === "Explorer" && sidebarOpen))
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#6272a4";
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        )}

        <Sidebar
          activeTab={activeTab}
          onSelect={setActiveTab}
          isMobile={isMobile}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 36,
              background: "#21222c",
              display: "flex",
              overflowX: "auto",
              flexShrink: 0,
              borderBottom: "1px solid #191a21",
              scrollbarWidth: "none",
            }}
          >
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.short}
                style={{
                  height: "100%",
                  padding: isMobile ? "0" : "0 16px",
                  width: isMobile ? "25%" : undefined,
                  background: activeTab === tab.id ? "#282a36" : "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === tab.id
                      ? "1px solid #bd93f9"
                      : "1px solid transparent",
                  borderRight: "1px solid #191a21",
                  color: activeTab === tab.id ? "#bd93f9" : "#6272a4",
                  fontSize: 13,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "'Fira Code', monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  flexShrink: isMobile ? 0 : undefined,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#f8f8f2";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#6272a4";
                }}
              >
                {isMobile ? (
                  tab.icon
                ) : (
                  <>
                    <span style={{ color: "inherit", fontSize: 10 }}>◆</span>
                    {tab.label}
                  </>
                )}
              </button>
            ))}
          </div>

          {!isMobile && (
            <div
              style={{
                height: 24,
                background: "#282a36",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 6,
                fontSize: 12,
                color: "#6272a4",
                flexShrink: 0,
                borderBottom: "1px solid #1a1b22",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              <span>portfolio</span>
              <span>›</span>
              <span style={{ color: "#f8f8f2" }}>{currentTab.label}</span>
            </div>
          )}

          <div
            style={{
              flex: 1,
              overflow: "auto",
              background: "#282a36",
              minWidth: 0,
            }}
          >
            {sectionContent[activeTab]}
          </div>
        </div>
      </div>

      <div
        style={{
          height: isMobile ? 26 : 22,
          background: "#bd93f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: isMobile ? 8 : 16,
            fontSize: isMobile ? 10 : 11,
            color: "#21222c",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          <span>⎇ main</span>
          {!isMobile && <span>⚡ TypeScript</span>}
        </div>
        <div
          style={{
            display: "flex",
            gap: isMobile ? 8 : 16,
            fontSize: isMobile ? 10 : 11,
            color: "#21222c",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {!isMobile && (
            <>
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
            </>
          )}
          <span>Next.js</span>
          {!isMobile && <span>{aboutMe.name}</span>}
        </div>
      </div>
    </div>
  );
}
