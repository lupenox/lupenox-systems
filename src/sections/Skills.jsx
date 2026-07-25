import "../styles/sections/sections.css";
import "../styles/sections/skills.css";
import SkillDisplay from "../components/Skill_Display";

const skillList = {
  agentic: {
    title: "Agentic AI & Web Automation",
    description: "Multi-stage agent workflows, headless browser automation, and LLM-powered reranking.",
    items: [
      { name: "LiveKit Agents" },
      { name: "Apify API" },
      { name: "Playwright" },
      { name: "Gemini 1.5 Flash" },
      { name: "Multi-Stage State Machines" },
    ],
  },

  voiceMultimodal: {
    title: "Real-Time Voice & Multimodal Systems",
    description: "Low-latency speech-to-text, text-to-speech, voice activity detection, and streaming audio.",
    items: [
      { name: "Deepgram STT (Nova-3)" },
      { name: "ElevenLabs TTS" },
      { name: "Silero VAD" },
      { name: "openWakeWord" },
      { name: "PyAudio & SpeechRecognition" },
    ],
  },

  localLlm: {
    title: "Local LLM & Model Orchestration",
    description: "On-device inference pipelines, open-source model execution, and fine-tuning preparation.",
    items: [
      { name: "Hugging Face Transformers" },
      { name: "Ollama API" },
      { name: "PyTorch" },
      { name: "LoRA / PEFT Prep" },
      { name: "Model Caching & Selection" },
    ],
  },

  backends: {
    title: "AI Backends & API Engineering",
    description: "Robust service interfaces, web framework backends, and cross-platform desktop UI integration.",
    items: [
      { name: "Python" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "Electron Desktop Apps" },
      { name: "React & Next.js" },
    ],
  },

  evalTesting: {
    title: "Evaluation, Testing & Reliability",
    description: "Mock-isolated unit testing, guardrail evaluation, and client-side usage/budget widgets.",
    items: [
      { name: "Python unittest (Provider Fakes)" },
      { name: "Pytest Automation" },
      { name: "Guardrail Policy Evaluation" },
      { name: "API Usage Budget Tracking" },
    ],
  },

  cloudDevops: {
    title: "Cloud, Linux & CI/CD Infrastructure",
    description: "Operational foundation for containerizing, testing, and deploying AI applications reliably.",
    items: [
      { name: "Linux Systems" },
      { name: "Docker Containers" },
      { name: "GitHub Actions CI/CD" },
      { name: "AWS Cloud" },
      { name: "Terraform IaC" },
      { name: "Git & Vercel" },
    ],
  },
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container container">
        <h2 className="header">AI Engineering Capabilities</h2>
        <p className="skills-subtitle">
          Verified technical skills across real-time voice agents, autonomous web workflows, on-device LLM inference, model evaluation, and backend infrastructure.
        </p>

        <div className="skills-grid">
          {Object.values(skillList).map((category) => (
            <SkillDisplay key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;