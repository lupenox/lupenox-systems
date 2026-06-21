import "../styles/sections/sections.css";
import "../styles/sections/projects.css";
import ProjectDisplay from "../components/Project_Display";

const projectList = [
  {
    id: 1,
    title: "Job Source Agent",
    status: "Featured Agentic AI",
    impact: "Automates opportunity discovery and application intelligence for tech roles.",
    description:
      "An agent-style job research workflow that gathers role signals, extracts recruiter-relevant requirements, and turns noisy listings into actionable application targets.",
    tech: ["Agentic AI", "Python", "Automation", "Data Extraction", "Workflow Design"],
    github: "https://github.com/lupenox/job-source-agent",
    demo: "#contact",
    accent: "purple",
  },
  {
    id: 2,
    title: "LiveKit Mock Interview Agent",
    status: "Featured Realtime AI",
    impact: "Voice-first interview practice with realtime agent interaction.",
    description:
      "A realtime mock interview agent concept built around conversational AI, low-latency voice workflows, structured feedback, and recruiter-style technical screening preparation.",
    tech: ["LiveKit", "Realtime AI", "Agents", "Voice UX", "JavaScript"],
    github: "https://github.com/lupenox/livekit-mock-interview-agent",
    demo: "#contact",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Local AI Chatbot",
    status: "Functional Prototype",
    impact: "Offline desktop AI with model switching and local inference experiments.",
    description:
      "A local AI chatbot with a Flask backend, Hugging Face model support, dynamic model selection, and an Electron desktop interface for private AI workflows.",
    tech: ["Python", "Flask", "Transformers", "Electron", "Local LLMs"],
    github: "https://github.com/lupenox/local-ai-chatbot",
    accent: "blue",
  },
  {
    id: 4,
    title: "Bash Guardian AI",
    status: "WIP AI Companion",
    impact: "Linux-first assistant for safer terminal workflows and productivity.",
    description:
      "A personal AI companion focused on local AI tooling, conversational workflows, prompt engineering, shell assistance, and supportive productivity automation.",
    tech: ["Python", "Linux", "Bash", "Prompt Engineering", "Local AI"],
    github: "https://github.com/lupenox/bash-guardian-ai",
    accent: "green",
  },
  {
    id: 5,
    title: "Cloud API CI/CD Terraform",
    status: "DevOps Lab",
    impact: "API delivery pipeline with infrastructure-as-code foundations.",
    description:
      "A DevOps-focused project exploring FastAPI deployment, automated testing, Docker support, CI/CD workflows, and Terraform infrastructure scaffolding.",
    tech: ["FastAPI", "Pytest", "Docker", "Terraform", "GitHub Actions"],
    github: "https://github.com/lupenox/cloud-api-cicd-terraform",
    accent: "pink",
  },
  {
    id: 6,
    title: "Terminal Diagnostics",
    status: "Linux Utility",
    impact: "Fast command-line visibility into system health for troubleshooting.",
    description:
      "A terminal-based Python diagnostic tool that reports system information, memory usage, disk usage, and mounted partitions for quick Linux troubleshooting.",
    tech: ["Python", "Linux", "Diagnostics", "System Admin"],
    github: "https://github.com/lupenox/Terminal-Diagnostics",
    accent: "slate",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <p className="section-kicker">Proof of work</p>
        <h2 className="section-title">Projects built for AI, automation, and infrastructure.</h2>
        <p className="section-subtitle projects-subtitle">
          Recruiter-friendly snapshots of the strongest work: agentic workflows,
          realtime AI, local LLM tooling, Linux automation, and DevOps delivery systems.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectDisplay key={project.id} project={project} featured={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
