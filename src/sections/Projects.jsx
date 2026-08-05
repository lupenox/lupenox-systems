import "../styles/sections/sections.css";
import "../styles/sections/projects.css";
import ProjectDisplay from "../components/Project_Display";

const flagshipProjects = [
  {
    id: 0,
    isFlagship: true,
    title: "Resume Tailor",
    category: "Local Multi-Agent AI & Document Automation",
    status: "Working Prototype",
    problem:
      "Generic resume generators can invent claims, obscure how content changed, and depend on opaque cloud workflows that expose private career data.",
    description:
      "A local Linux CLI and localhost web application that retrieves job postings, maps requirements to immutable resume evidence, generates schema-constrained tailored content with Codex and local Gemma through Ollama, and deterministically renders and validates a one-page DOCX/PDF behind human approval gates.",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI Codex CLI",
      "Gemma 4 12B",
      "Ollama",
      "Apify API",
      "JSON Schema",
      "python-docx",
      "LibreOffice / Poppler",
      "SQLite",
    ],
    github: "https://github.com/lupenox/resume-tailor",
    diagramSvg: `<svg viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="700" height="110" rx="8" fill="#0f172a"/><g font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="70" y="52" fill="#f8fafc">Job Posting</text><text x="70" y="66" fill="#38bdf8">URL or Text</text><path d="M125 55 h20" stroke="#38bdf8" stroke-width="1.5"/><rect x="145" y="35" width="120" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="205" y="52" fill="#f8fafc">Apify + Local</text><text x="205" y="66" fill="#06b6d4">Validation</text><path d="M265 55 h20" stroke="#38bdf8" stroke-width="1.5"/><rect x="285" y="35" width="125" height="40" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/><text x="347" y="52" fill="#f8fafc">Codex Evidence</text><text x="347" y="66" fill="#6366f1">Analysis</text><path d="M410 55 h20" stroke="#38bdf8" stroke-width="1.5"/><rect x="430" y="35" width="125" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="492" y="52" fill="#f8fafc">Gemma 4 / Ollama</text><text x="492" y="66" fill="#a855f7">Schema Writer</text><path d="M555 55 h20" stroke="#38bdf8" stroke-width="1.5"/><rect x="575" y="35" width="110" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="630" y="52" fill="#f8fafc">DOCX / PDF</text><text x="630" y="66" fill="#10b981">QA + Approval</text></g></svg>`,
    architectureBullets: [
      {
        title: "Evidence-Bound Requirement Analysis",
        detail:
          "Builds immutable resume-source and job-requirement catalogs with stable IDs, then uses Codex in a read-only session to classify supported and unsupported requirements without inventing candidate evidence.",
      },
      {
        title: "Local Schema-Constrained Writer",
        detail:
          "Runs Gemma 4 12B through a fixed localhost Ollama endpoint and requires one strict JSON object that passes canonical schema, factual-integrity, technology, metric, seniority, structure, and content-budget validation.",
      },
      {
        title: "Human Approval & Deterministic Rendering",
        detail:
          "Places approval gates around the retrieved posting, evidence analysis, and content diff while deterministic Python controls typography, page geometry, section ordering, hyperlinks, and DOCX generation without modifying the source resume.",
      },
      {
        title: "Validated Export & Independent Final QA",
        detail:
          "Exports through an isolated LibreOffice profile, checks the one-page PDF with Poppler text and bounding-box validation, renders a preview, and performs a fresh Codex visual/content review with only one bounded revision path.",
      },
    ],
    testingNote:
      "Uses fail-closed schema and evidence checks, source and artifact hashes, deterministic document validation, preserved run artifacts, and nonzero exits when retrieval, generation, rendering, or final QA cannot be authenticated.",
  },
  {
    id: 1,
    isFlagship: true,
    title: "LiveKit AI Mock Interview Agent",
    category: "Real-Time Voice AI & Workflow State Machine",
    status: "Working Prototype",
    problem:
      "Voice AI applications often suffer from unnatural interruptions, latency spikes, or stalling when candidates pause mid-answer during interactive sessions.",
    description:
      "A real-time voice-agent application engineered with LiveKit Agents featuring a two-stage interview workflow state machine, speech recognition, LLM reasoning, speech synthesis, and client API budget tracking.",
    tech: [
      "LiveKit Agents",
      "Deepgram Nova-3 STT",
      "Groq / Gemini LLM",
      "ElevenLabs TTS",
      "Silero VAD",
      "Python unittest",
      "Next.js",
      "GitHub Actions CI",
    ],
    github: "https://github.com/lupenox/livekit-interview-agent",
    diagramSvg: `<svg viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="700" height="110" rx="8" fill="#0f172a"/><g fill="#38bdf8" font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="95" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="62" y="59" fill="#f8fafc">User Audio</text><path d="M110 55 h25" stroke="#38bdf8" stroke-width="1.5"/><rect x="135" y="35" width="115" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="192" y="52" fill="#f8fafc">Silero VAD &amp;</text><text x="192" y="66" fill="#06b6d4">Deepgram STT</text><path d="M250 55 h25" stroke="#38bdf8" stroke-width="1.5"/><rect x="275" y="25" width="165" height="60" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/><text x="357" y="47" fill="#f8fafc">Multi-Stage State Machine</text><text x="357" y="63" fill="#6366f1" font-size="10">SelfIntro (60s) → PastExp (90s)</text><path d="M440 55 h25" stroke="#38bdf8" stroke-width="1.5"/><rect x="465" y="35" width="115" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="522" y="52" fill="#f8fafc">Groq LLM &amp;</text><text x="522" y="66" fill="#a855f7">ElevenLabs TTS</text><path d="M580 55 h25" stroke="#38bdf8" stroke-width="1.5"/><rect x="605" y="35" width="80" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="645" y="54" fill="#f8fafc">LiveKit</text><text x="645" y="68" fill="#10b981">Room</text></g></svg>`,
    architectureBullets: [
      {
        title: "Multi-Stage Voice Workflow",
        detail:
          "Orchestrates a 2-stage state machine (SelfIntroductionAgent and PastExperienceAgent) linked via LiveKit @function_tool transitions with 60s and 90s fallback timeouts.",
      },
      {
        title: "Streaming Voice Pipeline",
        detail:
          "Integrates Deepgram (Nova-3) for low-latency speech-to-text, ElevenLabs for voice synthesis, Groq LLM via OpenAI-compatible SDK for reasoning, and Silero for voice activity detection.",
      },
      {
        title: "Turn-Handling Optimization",
        detail:
          "Configured fixed endpointing (2–6s delay window), disabled preemptive generation, and suppressed agent speech interruption to create a calm, patient interview flow.",
      },
      {
        title: "API Budget & Client Dashboard",
        detail:
          "Built Next.js frontend with short-lived token authentication endpoints and a live credit health widget (credits-health.tsx) tracking provider API usage.",
      },
    ],
    testingNote:
      "Includes a Python unittest test suite (tests/test_agent.py) utilizing in-process LiveKit and provider fakes to verify stage transitions, timeouts, key validation, and turn handling without consuming API credits.",
  },
  {
    id: 2,
    isFlagship: true,
    title: "Local AI Chatbot",
    category: "On-Device LLM & Voice Interface",
    status: "Functional Prototype",
    problem:
      "Cloud LLM APIs introduce recurring subscription costs, privacy exposure, and dependency on constant internet connectivity.",
    description:
      "A fully local desktop chat interface running Hugging Face models and Ollama on-device for private, offline interactions with hands-free voice wake-word support.",
    tech: [
      "Python",
      "Flask",
      "Hugging Face Transformers",
      "Ollama API",
      "openWakeWord",
      "PyAudio",
      "Electron",
      "React",
    ],
    github: "https://github.com/lupenox/local-ai-chatbot",
    diagramSvg: `<svg viewBox="0 0 650 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="650" height="110" rx="8" fill="#0f172a"/><g font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="115" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="72" y="53" fill="#f8fafc">Electron Desktop</text><text x="72" y="67" fill="#38bdf8">React UI</text><path d="M130 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="160" y="35" width="125" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="222" y="53" fill="#f8fafc">Flask API Backend</text><text x="222" y="67" fill="#06b6d4">ai_service.py</text><path d="M285 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="315" y="20" width="165" height="70" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/><text x="397" y="40" fill="#f8fafc">Local Model Engines</text><text x="397" y="56" fill="#6366f1" font-size="10">HuggingFace Transformers</text><text x="397" y="70" fill="#a855f7" font-size="10">Ollama API (127.0.0.1)</text><path d="M480 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="510" y="35" width="125" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="572" y="53" fill="#f8fafc">Voice Module</text><text x="572" y="67" fill="#10b981">openWakeWord</text></g></svg>`,
    architectureBullets: [
      {
        title: "Flask Model Service",
        detail:
          "Developed a modular Flask API backend (ai_service.py) supporting dynamic loading and memory caching of Hugging Face models (FLAN-T5, TinyLlama, Phi-2, DistilGPT2) and Ollama local endpoints.",
      },
      {
        title: "Hands-Free Voice Module",
        detail:
          "Integrated wake.py combining openWakeWord detection, SpeechRecognition input processing, PyAudio streaming, and offline pyttsx3 speech synthesis.",
      },
      {
        title: "Cross-Platform Desktop Interface",
        detail:
          "Encapsulated React frontend within an Electron main process (main.js) for desktop execution and automated local backend lifecycle management.",
      },
    ],
    testingNote:
      "Verified on local CPU/GPU hardware with local cURL API generation requests and isolated component execution.",
  },
  {
    id: 3,
    isFlagship: true,
    title: "Autonomous AI Job Source Agent",
    category: "Agentic Web Automation & LLM Reranking",
    status: "Working Prototype",
    problem:
      "Traditional web scrapers break easily on company career pages due to non-standard navigation menus, dynamic single-page apps, and inconsistent link structures.",
    description:
      "An autonomous agentic workflow that takes a LinkedIn job or company URL, extracts official domain metadata via Apify, intelligently pinpoints career pages using Gemini LLM reranking, and extracts active job postings.",
    tech: [
      "Python",
      "Apify API",
      "Playwright",
      "Gemini 1.5 Flash",
      "LLM Candidate Reranker",
      "Domain Validator",
      "Pytest",
    ],
    github: "https://github.com/lupenox/job-source-agent",
    diagramSvg: `<svg viewBox="0 0 650 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="650" height="110" rx="8" fill="#0f172a"/><g font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="70" y="53" fill="#f8fafc">LinkedIn URL</text><text x="70" y="67" fill="#38bdf8">Job or Company</text><path d="M125 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="155" y="35" width="120" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="215" y="53" fill="#f8fafc">Apify API</text><text x="215" y="67" fill="#06b6d4">Domain Extractor</text><path d="M275 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="305" y="25" width="160" height="60" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="385" y="47" fill="#f8fafc">Gemini 1.5 Flash</text><text x="385" y="63" fill="#a855f7" font-size="10">LLM Candidate Reranker</text><path d="M465 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="495" y="35" width="140" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="565" y="53" fill="#f8fafc">Playwright Headless</text><text x="565" y="67" fill="#10b981">Job Link Extractor</text></g></svg>`,
    architectureBullets: [
      {
        title: "Hybrid Keyword + LLM Candidate Reranking",
        detail:
          "Combines fast rule-based link scoring with Gemini 1.5 Flash candidate evaluation to pick the exact career page link on complex corporate domains.",
      },
      {
        title: "Headless Browser Automation",
        detail:
          "Employs Playwright chromium automation (crawler.py) to navigate Javascript-heavy job boards and extract verified job posting URLs.",
      },
      {
        title: "Resilient Fallback Design",
        detail:
          "Features domain validation (validator.py), automatic retry logic, network exception handling, and seamless fallback to keyword scoring if LLM key is absent.",
      },
    ],
    testingNote:
      "Equipped with a comprehensive Pytest suite (pytest tests/ -v) including mock execution mode (--mock) for deterministic offline testing without hitting live APIs.",
  },
  {
    id: 4,
    isFlagship: true,
    title: "Bash Guardian AI",
    category: "Personal AI Assistant & Guardrail System",
    status: "Experimental Prototype",
    problem:
      "Personal AI assistants require strict safety guardrails, predictable conversational tone, and specialized persona alignment without relying solely on default generic system prompts.",
    description:
      "A personal AI assistant repository centered on system prompt engineering, guardrail policy design, LoRA/PEFT fine-tuning dataset preparation, and Streamlit testing interfaces.",
    tech: [
      "Python",
      "Streamlit",
      "System Prompt Engineering",
      "Guardrail Policies",
      "LoRA / PEFT Prep",
      "JSONL Dataset Curation",
    ],
    github: "https://github.com/lupenox/bash-guardian-ai",
    diagramSvg: `<svg viewBox="0 0 650 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="650" height="110" rx="8" fill="#0f172a"/><g font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="115" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="72" y="53" fill="#f8fafc">User Query</text><text x="72" y="67" fill="#38bdf8">Streamlit GUI</text><path d="M130 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="160" y="35" width="140" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="230" y="53" fill="#f8fafc">System Prompt &amp;</text><text x="230" y="67" fill="#06b6d4">Guardrail Layer</text><path d="M300 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="330" y="35" width="140" height="40" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/><text x="400" y="53" fill="#f8fafc">LoRA Fine-Tuning</text><text x="400" y="67" fill="#6366f1">Config &amp; Dataset</text><path d="M470 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="500" y="35" width="135" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="567" y="53" fill="#f8fafc">Persona Evaluator</text><text x="567" y="67" fill="#10b981">evaluate_persona.py</text></g></svg>`,
    architectureBullets: [
      {
        title: "Guardrail Policy Specification",
        detail:
          "Authored structured markdown specifications for system prompts (prompts/system_prompt.md) and ethical guardrails (prompts/guardrails.md).",
      },
      {
        title: "Fine-Tuning Dataset Preparation",
        detail:
          "Structured JSONL conversational datasets (data/bash_persona_sample.jsonl) and LoRA configuration files (training/lora_config.yaml, train_lora.py) for targeted model behavior adaptation.",
      },
      {
        title: "Evaluation & Testing Prototype",
        detail:
          "Developed Streamlit desktop prototype (gui/app.py) and local evaluation script (tests/evaluate_persona.py) to assess response persona consistency and guardrails.",
      },
    ],
    testingNote:
      "Includes a local python evaluation script (evaluate_persona.py) to test persona alignment and system guardrail adherence.",
  },
  {
    id: 5,
    isFlagship: true,
    title: "SCADA Anomaly Detection",
    category: "Cyber-Physical Machine Learning",
    status: "Educational ML Project",
    problem:
      "Industrial control systems and gas pipelines are vulnerable to subtle cyber-threats and operational faults that evade standard threshold-based alarms.",
    description:
      "An industrial control system anomaly detection pipeline analyzing real-world gas pipeline SCADA sensor datasets to identify cyber-threats and operational failures using Support Vector Machines.",
    tech: [
      "Python",
      "scikit-learn (SVM)",
      "pandas",
      "numpy",
      "Feature Preprocessing",
      "Confusion Matrix Analysis",
    ],
    github: "https://github.com/lupenox/SCADA-Anomaly-Detection",
    diagramSvg: `<svg viewBox="0 0 650 110" xmlns="http://www.w3.org/2000/svg" class="svg-diagram"><rect width="650" height="110" rx="8" fill="#0f172a"/><g font-size="11" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" text-anchor="middle"><rect x="15" y="35" width="125" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="77" y="53" fill="#f8fafc">Gas Pipeline SCADA</text><text x="77" y="67" fill="#38bdf8">ARFF / CSV Datasets</text><path d="M140 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="170" y="35" width="130" height="40" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><text x="235" y="53" fill="#f8fafc">Data Cleaning &amp;</text><text x="235" y="67" fill="#06b6d4">Feature Scaling</text><path d="M300 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="330" y="35" width="140" height="40" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/><text x="400" y="53" fill="#f8fafc">Support Vector Machine</text><text x="400" y="67" fill="#6366f1">scikit-learn Classifier</text><path d="M470 55 h30" stroke="#38bdf8" stroke-width="1.5"/><rect x="500" y="35" width="135" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="567" y="53" fill="#f8fafc">Threat &amp; Fault</text><text x="567" y="67" fill="#10b981">Confusion Matrix</text></g></svg>`,
    architectureBullets: [
      {
        title: "ARFF to CSV Data Preprocessing",
        detail:
          "Built data cleaning scripts (convert_arff_to_csv.py, clean_data.py) to parse industrial sensor formats, handle missing values, and normalize features.",
      },
      {
        title: "SVM Machine Learning Classifier",
        detail:
          "Trained a Support Vector Machine (train_svm.py) classifier to differentiate normal operating parameters from malicious anomaly injections.",
      },
      {
        title: "Inference & Model Serialization",
        detail:
          "Saved serialized trained model checkpoints (.pkl) and constructed prediction script (predict_new_data.py) for evaluating new SCADA sensor streams.",
      },
    ],
    testingNote:
      "Evaluated using classification metrics, saved model checkpoints (svm_model_water.pkl), and confusion matrix visualizations.",
  },
];

const supportingProjects = [
  {
    id: 6,
    isFlagship: false,
    title: "cloud-api-cicd-terraform",
    category: "Cloud Backend & Infrastructure",
    status: "Working Prototype",
    problem:
      "Deploying containerized Python APIs requires automated testing, infrastructure provisioning, and continuous deployment pipelines.",
    description:
      "A production-style Python API (FastAPI) structured for containerized deployment using Docker, Terraform IaC, Pytest unit testing, and GitHub Actions CI/CD workflows.",
    tech: ["FastAPI", "Pytest", "Docker", "Terraform", "GitHub Actions", "AWS ECS"],
    github: "https://github.com/lupenox/cloud-api-cicd-terraform",
  },
  {
    id: 7,
    isFlagship: false,
    title: "Client-Server-Networking",
    category: "Systems & Inter-Process Communication",
    status: "Completed Project",
    problem:
      "Understanding underlying low-level networking primitives requires implementing direct socket communication in C.",
    description:
      "A client-server networking application written in C demonstrating low-level socket IPC, message passing protocols, error handling, and Makefile build compilation.",
    tech: ["C Programming", "Linux Sockets", "IPC", "Makefiles", "Networking"],
    github: "https://github.com/lupenox/Client-Server-Networking",
  },
  {
    id: 8,
    isFlagship: false,
    title: "Gamepad2Mouse",
    category: "Input Mapping & Accessibility",
    status: "Functional Utility",
    problem:
      "Controlling computer interfaces using non-standard input hardware like game controllers requires low-latency event mapping.",
    description:
      "A Python desktop utility that translates Xbox controller joystick and button signals into virtual mouse movement, clicks, and keyboard actions.",
    tech: ["Python", "Input Mapping", "Automation", "Desktop Utility"],
    github: "https://github.com/lupenox/Gamepad2Mouse",
  },
  {
    id: 9,
    isFlagship: false,
    title: "Terminal-Diagnostics",
    category: "Linux System Administration",
    status: "Lightweight Utility",
    problem:
      "System administrators require quick command-line diagnostics to inspect memory, disk usage, and mountpoints during troubleshooting.",
    description:
      "A terminal-based Python diagnostic utility providing clear system memory summaries, disk space analytics, and partition mount status for Linux machines.",
    tech: ["Python", "Linux Systems", "Diagnostics", "System Admin"],
    github: "https://github.com/lupenox/Terminal-Diagnostics",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container container">
        <h2 className="header">Flagship AI Projects</h2>
        <p className="projects-subtitle">
          Verified evidence-driven case studies detailing local multi-agent pipelines, real-time voice systems, agentic web automation, on-device LLM inference, and machine learning models.
        </p>

        <div className="projects-flagship-grid">
          {flagshipProjects.map((project) => (
            <ProjectDisplay key={project.id} project={project} />
          ))}
        </div>

        <div className="supporting-projects-wrapper">
          <h3 className="supporting-projects-title">
            Supporting Systems & Infrastructure Projects
          </h3>
          <p className="supporting-projects-subtitle">
            Complementary projects demonstrating cloud API backends, Linux systems engineering, low-level socket programming, and utility automation.
          </p>

          <div className="projects-supporting-grid">
            {supportingProjects.map((project) => (
              <ProjectDisplay key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
