import "../styles/sections/sections.css";
import "../styles/sections/projects.css";
import ProjectDisplay from "../components/Project_Display";

const projectList = [
  {
    id: 1,
    title: "Local AI Chatbot",
    status: "Functional Prototype",
    description:
      "A local AI chatbot with a Flask backend, Hugging Face model support, dynamic model selection, and an Electron desktop interface. Built to explore offline AI workflows, local inference, voice interaction, and desktop app integration.",
    tech: ["Python", "Flask", "Transformers", "Electron", "Local AI"],
    github: "https://github.com/lupenox/local-ai-chatbot",
  },
  {
    id: 2,
    title: "Gamepad2Mouse",
    status: "Functional Utility",
    description:
      "A Python desktop utility that maps Xbox controller input to mouse, click, and keyboard actions. Built as a practical accessibility and workflow automation tool.",
    tech: ["Python", "Automation", "Input Mapping", "Desktop Utility"],
    github: "https://github.com/lupenox/Gamepad2Mouse",
  },
  {
    id: 3,
    title: "Terminal-Diagnostics",
    status: "Lightweight Utility",
    description:
      "A terminal-based Python diagnostic tool that reports system information, memory usage, disk usage, and mounted partitions for quick troubleshooting.",
    tech: ["Python", "Linux", "Diagnostics", "System Admin"],
    github: "https://github.com/lupenox/Terminal-Diagnostics",
  },
  {
    id: 4,
    title: "cloud-api-cicd-terraform",
    status: "Work in Progress",
    description:
      "A DevOps-focused project exploring FastAPI service deployment, automated testing, Docker support, CI/CD workflows, and Terraform infrastructure scaffolding.",
    tech: ["FastAPI", "Pytest", "Docker", "Terraform", "GitHub Actions"],
    github: "https://github.com/lupenox/cloud-api-cicd-terraform",
  },
  {
    id: 5,
    title: "Bash Guardian AI",
    status: "Work in Progress",
    description:
      "A personal AI companion project focused on local AI tooling, conversational workflows, prompt engineering, and supportive productivity automation.",
    tech: ["Python", "AI", "Prompt Engineering", "Local LLMs"],
    github: "https://github.com/lupenox/bash-guardian-ai",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="projects-subtitle">
          Selected projects showcasing my work in local AI, automation, Linux
          tooling, infrastructure, and DevOps-focused experimentation.
        </p>

        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectDisplay key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;