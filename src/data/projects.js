import hackaton from "../assets/projects/1622214050531.png";
import practicasCarrera from "../assets/projects/practicas-carreras.png";
import portfolioFiopans1 from "../assets/projects/portfolio-fiopans1.png";
import taskManager from "../assets/projects/task-manager.png";
import hackudcMarkdown from "../content/projects/hackudc.md?raw";
import portfolioMarkdown from "../content/projects/portfolio.md?raw";
import taskManagerMarkdown from "../content/projects/task-manager.md?raw";
import universityMarkdown from "../content/projects/university-projects.md?raw";
import sandboxAI from "../assets/projects/sandbox-ai.png";
import sandboxAIMarkdown from "../content/projects/sandbox-ai.md?raw";

export const projects = [
  {
    slug: "task-manager",
    year: "2025",
    imgPath: taskManager,
    title: "Task Manager",
    subtitle: "Full-stack CRUD application",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Redux"],
    description:
      "Task management platform with CRUD flows, authentication-ready architecture, REST APIs, and a focused interface designed for real daily usage.",
    highlight:
      "It shows my strongest combination: Java backend architecture with a React frontend that keeps the experience direct and practical.",
    ghLink: "https://github.com/fiopans1/task-manager",
    demoLink: "https://taskmanager.fiopans1.com",
    detailMarkdown: taskManagerMarkdown,
  },
  {
    slug: "sandbox-ai",
    year: "2025",
    imgPath: sandboxAI,
    title: "Sandbox AI",
    subtitle: "Chatbot to interact with different LLMs",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Docker",
      "AI Integration",
      "LangChain",
    ],
    description:
      "Interactive chatbot platform where you can seamlessly switch between different LLMs to experiment, compare responses, and explore AI capabilities in a unified interface.",
    highlight:
      "It demonstrates full-stack integration of multiple AI models with a user-friendly frontend, showcasing practical AI application design.",
    ghLink: "https://github.com/fiopans1/sandbox-ai",
    detailMarkdown: sandboxAIMarkdown,
  },
  {
    slug: "portfolio-fiopans1",
    year: "2025",
    imgPath: portfolioFiopans1,
    title: "Portfolio fiopans1",
    subtitle: "Personal React SPA",
    tags: ["React", "Vite", "Bootstrap", "JavaScript", "CSS"],
    description:
      "Personal site crafted to present experience, projects, and contact points with a polished UI and a structure ready to evolve over time.",
    highlight:
      "This project is my public product card: it balances visual design, content hierarchy, routing, and maintainable frontend code.",
    ghLink: "https://github.com/fiopans1/portfolio-fiopans1",
    demoLink: "https://fiopans1.com",
    detailMarkdown: portfolioMarkdown,
  },
  {
    slug: "university-projects",
    year: "2024",
    imgPath: practicasCarrera,
    title: "University Projects",
    subtitle: "Algorithms, systems, and data structures",
    tags: ["Java", "C", "Python", "Algorithms", "Databases"],
    description:
      "A broad collection of academic builds covering algorithms, low-level programming, databases, networking, AI, and software foundations.",
    highlight:
      "It demonstrates range: from theory-heavy problem solving to implementation detail across different paradigms and languages.",
    ghLink: "https://github.com/fiopans1/practicas_carrera",
    detailMarkdown: universityMarkdown,
  },
  {
    slug: "hackudc-codee",
    year: "2024",
    imgPath: hackaton,
    title: "HackUDC 2024",
    subtitle: "Code analysis and reporting tool",
    tags: ["Python", "GitHub Actions", "HTML", "JavaScript", "CSS"],
    description:
      "Hackathon project focused on automated code analysis, reporting, and CI-driven notifications with a strong delivery mindset.",
    highlight:
      "It represents rapid execution under pressure, automation-first thinking, and a pragmatic approach to developer tooling.",
    ghLink: "https://github.com/fiopans1/HACKUDC2024-CODEE",
    demoLink: "https://fiopans1.github.io/HACKUDC2024-CODEE",
    detailMarkdown: hackudcMarkdown,
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
