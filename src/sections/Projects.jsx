import "../styles/sections/sections.css";
import "../styles/sections/projects.css";
import ProjectDisplay from "../components/Project_Display";

const projectList = [
  {
    id: 1,
    title: "Job Source Agent",
    status: "Agentic AI",
    impact: "Turns scattered job posts into clearer application targets.",
    description:
      "A job research workflow that pulls useful signals out of listings, highlights role requirements, and helps turn noisy searches into a more focused application plan.",
    tech: ["Agentic AI", "Python", "Automation", "Data Extraction", "Workflow Design"],
    github: "https://github.com/lupenox/job-source-agent",
    demo: "#contact",
    accent: "purple",
  },
  {
    id: 2,
    title: "LiveKit Mock Interview Agent",
    status: "Realtime AI",
    impact: "Voice interview practice without the stiff script feeling.",
    description:
      "A realtime mock interview agent built around low-latency voice interaction, structured stages, and practical feedback for technical screening practice.",
    tech: ["LiveKit", "Realtime AI", "Agents", "Voice UX", "JavaScript"],
    github: "https://github.com/lupenox/livekit-mock-interview-agent",
    demo: "#contact",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Local AI Chatbot",
    status: "Local AI Prototype",
    impact: "Offline AI experiments with more privacy and control.",
    description:
      "A local chatbot with a Flask backend, Hugging Face model support, model switching, and an Electron desktop interface for private AI workflows.",
    tech: ["Python", "Flask", "Transformers", "Electron", "Local LLMs"],
    github: "https://github.com/lupenox/local-ai-chatbot",
    accent: "blue",
  },
  {
    id: 4,
    title: "Bash Guardian AI",
    status: "Linux AI Tooling",
    impact: "A Linux-first assistant for terminal workflows.",
    description:
      "A personal AI companion focused on local tooling, shell help, prompt workflows, and making command-line work feel less chaotic.",
    tech: ["Python", "Linux", "Bash", "Prompt Engineering", "Local AI"],
    github: "https://github.com/lupenox/bash-guardian-ai",
    accent: "green",
  },
  {
    id: 5,
    title: "Cloud API CI/CD Terraform",
    status: "DevOps Lab",
    impact: "A deployment pipeline playground for backend and infra practice.",
    description:
      "A DevOps-focused project exploring FastAPI deployment, automated tests, Docker, CI/CD workflows, and Terraform infrastructure scaffolding.",
    tech: ["FastAPI", "Pytest", "Docker", "Terraform", "GitHub Actions"],
    github: "https://github.com/lupenox/cloud-api-cicd-terraform",
    accent: "pink",
  },
  {
    id: 6,
    title: "Terminal Diagnostics",
    status: "Linux Utility",
    impact: "Quick system visibility from the terminal.",
    description:
      "A Python diagnostic tool that reports system information, memory usage, disk usage, and mounted partitions for faster Linux troubleshooting.",
    tech: ["Python", "Linux", "Diagnostics", "System Admin"],
    github: "https://github.com/lupenox/Terminal-Diagnostics",
    accent: "slate",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <p className="section-kicker">Stuff I’ve built</p>
        <h2 className="section-title">Projects from the AI, Linux, and automation rabbit hole.</h2>
        <p className="section-subtitle projects-subtitle">
          These are the projects that best show how I think: find a workflow,
          make it less painful, wire up the system pieces, and keep iterating until
          it feels useful.
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
