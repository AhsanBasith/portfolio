import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Smartphone,
  Database,
  Cloud,
  Layers3,
  ExternalLink,
  Star,
  GitFork,
  GitBranch,
  Terminal,
  Sparkles,
  Globe,
  ChevronRight,
} from "lucide-react";
import "./styles.css";

const GITHUB_USER = "AhsanBasith";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

// These are public repositories visible on the GitHub profile at the time this
// starter was prepared. Descriptions are intentionally conservative; refine them
// after reviewing each repository's README and implementation.
const FEATURED = [
  {
    name: "pajak-kendaraan.github.io",
    title: "Vehicle Tax Lookup",
    description:
      "Web project related to vehicle tax information, presented as a lightweight public-facing site.",
    language: "CSS",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["Web", "GitHub"],
    url: `https://github.com/${GITHUB_USER}/pajak-kendaraan.github.io`,
    accent: "mint",
    icon: Globe,
  },
  {
    name: "Aplikasi-Pajak-Bumi-dan-Bangunan-Berbasis-WEB",
    title: "Property Tax Web App",
    description:
      "A web-based application focused on land and building tax workflows.",
    language: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    category: ["Web", "GitHub"],
    url: `https://github.com/${GITHUB_USER}/Aplikasi-Pajak-Bumi-dan-Bangunan-Berbasis-WEB`,
    accent: "violet",
    icon: Layers3,
  },
  {
    name: "Movie_API_with_MovieDB",
    title: "Movie Discovery",
    description:
      "A JavaScript project integrating movie data from The Movie Database API.",
    language: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "API",
    url: `https://github.com/${GITHUB_USER}/Movie_API_with_MovieDB`,
    accent: "orange",
    icon: Sparkles,
  },
  {
    name: "SPK-Metode-Weighted-Product-Dalam-Menentukan-Kelayakan-Peningkatan-Produksi-Kue-Kering",
    title: "Weighted Product Decision Support",
    description:
      "A decision-support project applying the Weighted Product method to production feasibility assessment.",
    language: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Logic",
    url: `https://github.com/${GITHUB_USER}/SPK-Metode-Weighted-Product-Dalam-Menentukan-Kelayakan-Peningkatan-Produksi-Kue-Kering`,
    accent: "blue",
    icon: Code2,
  },
  {
    name: "Aplikasi-berbasis-web-sederhana-untuk-mencatat-barang-beserta-klasifikasinya",
    title: "Inventory Classification",
    description:
      "A simple web application for recording items and organizing them by classification.",
    language: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["Web", "GitHub"],
    url: `https://github.com/${GITHUB_USER}/Aplikasi-berbasis-web-sederhana-untuk-mencatat-barang-beserta-klasifikasinya`,
    accent: "pink",
    icon: Database,
  },
  {
    name: "rFruits",
    title: "Fruit Sales Receipt App",
    description:
      "A mobile application for creating and managing fruit sales receipts.",
    language: "JavaScript",
    technologies: ["React Native", "JavaScript"],
    category: ["Mobile Application", "GitHub"],
    url: `https://github.com/${GITHUB_USER}/rfruits`,
    accent: "mint",
    icon: Smartphone,
  },
  {
    name: "return-pembelian",
    title: "Purchase Returns",
    description:
      "A repository for a purchase-return workflow built with the Blade templating ecosystem.",
    language: "Blade",
    technologies: ["Laravel", "Blade", "PHP", "MySQL"],
    category: ["Web", "GitHub"],
    url: `https://github.com/${GITHUB_USER}/return-pembelian`,
    accent: "yellow",
    icon: GitBranch,
  },
  {
    name: "Quiccas Mobile App",
    title: "EV Charging Mobile Application",
    description:
      "A mobile application for EV charging station discovery, charging status monitoring, vehicle management, and digital wallet features.",
    private: true,
    role: "Mobile App Developer",
    technologies: ["React Native", "Expo", "GraphQL", "AWS Amplify"],
    category: "Mobile Application",
    highlights: [
      "Mobile UI development",
      "Navigation and user flows",
      "GraphQL API integration",
      "Backend data fetching and presentation",
      "EV charging and wallet features",
    ],
    image: "/projects/quiccas-preview.png",
    accent: "mint",
    icon: Smartphone,
  },
  {
    name: "TPMS Configuration App",
    title: "Industrial IoT Configuration Application",
    description:
      "A mobile application for configuring TPMS sensor nodes, tire sensors, and gateways on mining trailers, including support for offline OTA update workflows.",
    private: true,
    role: "Mobile App Developer",
    technologies: [
      "Mobile Application Development",
      "IoT Device Integration",
      "Offline OTA",
    ],
    category: ["Mobile Application", "Industrial IoT"],
    highlights: [
      "TPMS sensor configuration",
      "Sensor node commissioning",
      "Gateway configuration",
      "Offline OTA update workflow",
      "Industrial device management",
    ],
    image: "/projects/tpms-config-preview.png",
    accent: "orange",
    icon: Cloud,
  },
  {
    name: "Healthcare Measurement App",
    title: "Healthcare & Connected Devices",
    description:
      "A healthcare mobile application that enables registered users to access measurement services through QR code scanning, view digital health results, and connect compatible external measurement devices via Bluetooth.",
    private: true,
    role: "Mobile App Developer",
    technologies: [
      "Flutter",
      "QR Code Integration",
      "Bluetooth Connectivity",
      "API Integration",
    ],
    category: ["Healthcare Technology", "Mobile Application"],
    highlights: [
      "QR-based user access",
      "Health measurement result display",
      "Bluetooth device connectivity",
      "External measurement device integration",
      "Healthcare data presentation",
    ],
    image: "/projects/healthcare-app-preview.png",
    accent: "pink",
    icon: Smartphone,
  },
  {
    name: "EV Active Sound Platform",
    title: "Connected EV Sound & Creator Marketplace",
    description:
      "An integrated platform for customizing electric vehicle sounds through a connected exhaust device, featuring a mobile application, landing page, web dashboard, backend services, and a marketplace for sound creators.",
    private: true,
    role: "Full-Stack Developer",
    technologies: [
      "React Native",
      "Expo",
      "React",
      "Backend Development",
      "API Integration",
      "AWS Amplify",
    ],
    category: ["EV Technology", "Mobile Application", "Web"],
    highlights: [
      "Connected EV sound device integration",
      "Mobile application development",
      "Landing page and web dashboard",
      "Custom EV sound marketplace",
      "Creator publishing and selling workflows",
      "Backend services and business logic",
    ],
    image: "/projects/ev-sound-platform-preview.png",
    accent: "violet",
    icon: Sparkles,
  },
];

const STACK = [
  { name: "React", group: "Frontend", icon: Code2 },
  { name: "JavaScript", group: "Frontend", icon: Terminal },
  { name: "React Native / Expo", group: "Mobile", icon: Smartphone },
  { name: "Flutter", group: "Mobile", icon: Smartphone },
  { name: "AWS Amplify", group: "Backend", icon: Cloud },
  { name: "GraphQL / AppSync", group: "Backend", icon: Database },
  { name: "HTML & CSS", group: "Frontend", icon: Layers3 },
];

function ProjectModal({ project, onClose }) {
  const Icon = project.icon || Code2;
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-image">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
            />
          ) : null}
          <div className="modal-image-placeholder" style={project.image ? {display:"none"} : {}}>
            <Icon size={40} />
            <span>Preview coming soon</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <div className="modal-icon">
              <Icon size={20} />
            </div>
            <div>
              <div className="modal-categories">
                {categories.map((c) => (
                  <span key={c} className="modal-cat-badge">{c}</span>
                ))}
                {project.private && <span className="modal-private-badge">🔒 Private</span>}
              </div>
              <h2 className="modal-title">{project.title}</h2>
              {project.role && <p className="modal-role">{project.role}</p>}
            </div>
          </div>

          <p className="modal-description">{project.description}</p>

          {project.highlights && (
            <div className="modal-section">
              <h4>Highlights</h4>
              <ul className="modal-highlights">
                {project.highlights.map((h) => (
                  <li key={h}><ChevronRight size={13} />{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="modal-section">
              <h4>Technologies</h4>
              <div className="modal-tech-list">
                {project.technologies.map((t) => (
                  <span key={t} className="modal-tech-badge">{t}</span>
                ))}
              </div>
            </div>
          )}

          {project.language && (
            <div className="modal-section">
              <h4>Language</h4>
              <div className="modal-tech-list">
                <span className="modal-tech-badge">{project.language}</span>
              </div>
            </div>
          )}

          <div className="modal-actions">
            {!project.private && project.url && (
              <a
                className="button button-primary"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> View Repository <ArrowUpRight size={14} />
              </a>
            )}
            <button className="button button-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  useEffect(() => {
    let alive = true;
    async function loadGitHub() {
      try {
        const [p, r] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
          ),
        ]);
        if (!p.ok || !r.ok)
          throw new Error("GitHub API is temporarily unavailable.");
        const profileData = await p.json();
        const repoData = await r.json();
        if (!alive) return;
        setProfile(profileData);
        setRepos(repoData.filter((repo) => !repo.fork && !repo.private));
        setApiMessage("");
      } catch {
        if (alive)
          setApiMessage(
            "Live GitHub stats are temporarily unavailable. Project links remain accessible.",
          );
      } finally {
        if (alive) setLoading(false);
      }
    }
    loadGitHub();
    return () => {
      alive = false;
    };
  }, []);

  const projectList = useMemo(() => {
    if (repos.length) {
      const repoMap = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
      const curated = FEATURED.map((item) => {
        const repo = repoMap.get(item.name.toLowerCase());
        return repo
          ? {
              ...item,
              url: repo.html_url,
              language: repo.language || item.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              updated: repo.updated_at,
            }
          : item;
      });
      const known = new Set(FEATURED.map((p) => p.name.toLowerCase()));
      const extras = repos
        .filter((r) => !known.has(r.name.toLowerCase()) && r.name.toLowerCase() !== "portfolio")
        .sort(
          (a, b) =>
            b.stargazers_count - a.stargazers_count ||
            new Date(b.updated_at) - new Date(a.updated_at),
        )
        .slice(0, 6)
        .map((r, i) => ({
          name: r.name,
          title: r.name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          description:
            r.description ||
            "Public repository. Open the repository to explore its code and documentation.",
          language: r.language || "Other",
          category: "GitHub",
          url: r.html_url,
          accent: ["mint", "violet", "orange", "blue"][i % 4],
          icon: Code2,
          stars: r.stargazers_count,
          forks: r.forks_count,
          updated: r.updated_at,
        }));
      return [...curated, ...extras];
    }
    return FEATURED;
  }, [repos]);

  const categories = ["All", ...new Set(projectList.flatMap((p) => Array.isArray(p.category) ? p.category : [p.category]))];
  const visibleProjects =
    filter === "All"
      ? projectList
      : projectList.filter((p) =>
          Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter
        );
  const publicRepoCount = profile?.public_repos ?? 8;

  const closeMenu = () => setMenuOpen(false);
  const closeModal = () => setSelectedProject(null);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">A.</span>
          <span>
            Ahsan<span className="brand-muted">/Portofolio</span>
          </span>
        </a>
        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-github"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SOFTWARE DEVELOPER{" "}
              <span className="eyebrow-line" />
            </div>
            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span className="gradient-text">purpose & detail.</span>
            </h1>
            <p className="hero-lead">
              Hi, I’m <strong>Ahsan Abdul Basith.</strong> I build web and
              mobile applications, bringing ideas to life with clean interfaces
              and thoughtful engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Let’s connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Github size={17} /> github.com/AhsanBasith
              </a>
              <span className="social-separator">/</span>
              <span className="open-to">Open to meaningful projects</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>ahsan.tsx</span>
                <span className="code-top-right">
                  <Code2 size={14} />
                </span>
              </div>
              <div className="code-content">
                <div>
                  <span className="line-num">01</span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </div>
                <div>
                  <span className="line-num">02</span> &nbsp;name:{" "}
                  <span className="code-green">'Ahsan Abdul Basith'</span>,
                </div>
                <div>
                  <span className="line-num">03</span> &nbsp;focus: [
                </div>
                <div>
                  <span className="line-num">04</span> &nbsp;{" "}
                  <span className="code-green">'Web'</span>,{" "}
                  <span className="code-green">'Mobile'</span>,
                </div>
                <div>
                  <span className="line-num">05</span> &nbsp;{" "}
                  <span className="code-green">'Problem solving'</span>
                </div>
                <div>
                  <span className="line-num">06</span> &nbsp;],
                </div>
                <div>
                  <span className="line-num">07</span> &nbsp;curiosity:{" "}
                  <span className="code-orange">Infinity</span>,
                </div>
                <div>
                  <span className="line-num">08</span>
                  {"}"};
                </div>
                <div className="code-cursor-line">
                  <span className="line-num">09</span>
                  <span className="cursor" />
                </div>
              </div>
              <div className="code-card-bottom">
                <span>
                  <span className="tiny-green-dot" /> Available for
                  collaboration
                </span>
                <span>UTF-8&nbsp; · &nbsp;JavaScript</span>
              </div>
            </div>
            <div className="floating-chip chip-react">
              <span className="react-symbol">⚛</span> React
            </div>
            <div className="floating-chip chip-mobile">
              <Smartphone size={16} /> Mobile apps
            </div>
            <div className="hero-decoration decoration-cross">✳</div>
            <div className="hero-decoration decoration-square" />
          </div>
          <a className="scroll-cue" href="#work">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line" />
          </a>
        </section>

        <section className="stats-strip section-wrap">
          <div className="stat">
            <span className="stat-number">
              {loading ? "—" : publicRepoCount.toString().padStart(2, "0")}
            </span>
            <span className="stat-label">PUBLIC REPOSITORIES</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">
              {loading
                ? "—"
                : (profile?.followers ?? 1).toString().padStart(2, "0")}
            </span>
            <span className="stat-label">GITHUB FOLLOWERS</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">
              06<span className="stat-plus">+</span>
            </span>
            <span className="stat-label">PROJECTS HIGHLIGHTED</span>
          </div>
          <a
            className="stats-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile <ArrowUpRight size={15} />
          </a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-index">01 /</span> SELECTED WORK
              </div>
              <h2>
                Projects that{" "}
                <span className="gradient-text">solve things.</span>
              </h2>
            </div>
            <p>
              A selection of public repositories and experiments. Explore the
              code, ideas, and implementation behind each one.
            </p>
          </div>
          {apiMessage && <div className="api-note">{apiMessage}</div>}
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  filter === cat ? "filter-chip active" : "filter-chip"
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon || Code2;
              return (
                <article
                  className={`project-card ${project.accent}`}
                  key={project.name}
                  onClick={() => setSelectedProject(project)}
                  style={{cursor:"pointer"}}
                >
                  <div className="project-card-top">
                    <div className="project-icon">
                      <Icon size={22} />
                    </div>
                    <span className="project-index">0{index + 1}</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} on GitHub`}
                      className="project-open"
                      style={project.private ? {opacity:.35,pointerEvents:'none'} : {}}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <div className="project-art">
                    {project.private ? (
                      <div className="mobile-art">
                        <div className="mobile-frame">
                          <div className="mobile-screen">
                            <div className="mobile-status-bar" />
                            <div className="mobile-content">
                              <div className="mobile-map" />
                              <div className="mobile-pin">⚡</div>
                              <div className="mobile-card-row">
                                <div className="mobile-card-item" />
                                <div className="mobile-card-item" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.category === "API" ? (
                      <div className="movie-art">
                        <div className="movie-backdrop" />
                        <div className="movie-poster poster-a" />
                        <div className="movie-poster poster-b" />
                        <div className="movie-poster poster-c" />
                        <div className="movie-search">
                          ⌕ &nbsp; Discover something good
                        </div>
                      </div>
                    ) : project.category === "Logic" ? (
                      <div className="logic-art">
                        <div className="logic-node node-a">Criteria</div>
                        <div className="logic-connector" />
                        <div className="logic-node node-b">Weight</div>
                        <div className="logic-connector" />
                        <div className="logic-node node-c">Result ↗</div>
                      </div>
                    ) : (
                      <div className="browser-art">
                        <div className="browser-bar">
                          <i />
                          <i />
                          <i />
                          <span>
                            {project.category === "Web"
                              ? "dashboard.app"
                              : "project.jsx"}
                          </span>
                        </div>
                        <div className="browser-body">
                          <div className="browser-side">
                            <b />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="browser-main">
                            <div className="browser-title" />
                            <div className="browser-subtitle" />
                            <div className="browser-metrics">
                              <i />
                              <i />
                              <i />
                            </div>
                            <div className="browser-chart">
                              <span />
                              <span />
                              <span />
                              <span />
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="project-meta">
                    <span className="project-category">
                      {Array.isArray(project.category)
                        ? project.category.join(" · ")
                        : project.category}
                    </span>
                    <span className="project-language">
                      <i
                        className={`language-dot ${project.language?.toLowerCase() === "css" ? "css" : project.language?.toLowerCase() === "blade" ? "blade" : ""}`}
                      />
                      {project.language}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.private && project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((h) => (
                        <li key={h}><ChevronRight size={12} />{h}</li>
                      ))}
                    </ul>
                  )}
                  <div className="project-footer">
                    {project.private ? (
                      <>
                        <span className="repo-name private-badge">🔒 Private</span>
                        {project.role && <span className="project-role">{project.role}</span>}
                      </>
                    ) : (
                      <>
                        <span className="repo-name">{project.name}</span>
                        <a href={project.url} target="_blank" rel="noreferrer">
                          View repository <ChevronRight size={14} />
                        </a>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="all-projects">
            <span>Want to see more?</span>
            <a
              href={`${GITHUB_URL}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              Explore all repositories <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-label">
              <div className="eyebrow">
                <span className="eyebrow-index">02 /</span> A LITTLE ABOUT ME
              </div>
              <div className="about-monogram">
                A<span>.</span>
              </div>
              <p className="about-caption">
                Curious by nature.
                <br />
                Developer by choice.
              </p>
            </div>
            <div className="about-content">
              <h2>
                Good software is more than code.{" "}
                <span className="muted-heading">
                  It’s about making things useful.
                </span>
              </h2>
              <p>
                I’m Ahsan, a developer interested in building practical digital
                products across web and mobile. I enjoy turning requirements
                into clear user experiences, connecting interfaces to data, and
                figuring out how the pieces fit together.
              </p>
              <p>
                My work and experiments span web applications, API integrations,
                decision-support tools, and mobile app development. I keep
                learning by building, iterating, and exploring new technologies.
              </p>
              <div className="about-values">
                <div>
                  <span className="value-number">01</span>
                  <div>
                    <strong>Thoughtful UI</strong>
                    <small>
                      Clear, responsive interfaces that feel natural to use.
                    </small>
                  </div>
                </div>
                <div>
                  <span className="value-number">02</span>
                  <div>
                    <strong>Practical engineering</strong>
                    <small>
                      Build for the actual problem, not just the demo.
                    </small>
                  </div>
                </div>
                <div>
                  <span className="value-number">03</span>
                  <div>
                    <strong>Continuous learning</strong>
                    <small>Stay curious and improve with every project.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-section section-wrap" id="stack">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-index">03 /</span> TOOLS OF THE TRADE
              </div>
              <h2>
                My <span className="gradient-text">toolkit.</span>
              </h2>
            </div>
            <p>
              Technologies that are relevant to my current work and projects.
              This list can evolve as I build and learn.
            </p>
          </div>
          <div className="stack-grid">
            {STACK.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="stack-card" key={item.name}>
                  <div className="stack-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.group}</span>
                  </div>
                  <span className="stack-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="stack-note">
            <Terminal size={16} />
            <span>
              Always exploring new tools, patterns, and better ways to build.
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-orb orb-a" />
            <div className="contact-orb orb-b" />
            <div className="eyebrow">
              <span className="eyebrow-index">04 /</span> HAVE SOMETHING IN
              MIND?
            </div>
            <h2>
              Let’s build something
              <br />
              <span className="gradient-text">meaningful.</span>
            </h2>
            <p>
              Have an idea, an interesting problem, or just want to connect? I’d
              be happy to hear from you.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:ahsan.basithabdul@gmail.com"
              >
                <Mail size={17} /> Email Me <ArrowUpRight size={15} />
              </a>
              <a
                className="button button-ghost"
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>
            Ahsan<span className="brand-muted">/Portofolio</span>
          </span>
        </a>
        <span className="footer-copy">
          Designed & built with care · React + Vite
        </span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} Ahsan Abdul Basith
        </span>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
