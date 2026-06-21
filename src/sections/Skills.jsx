import "../styles/sections/sections.css";
import "../styles/sections/skills.css";
import SkillDisplay from "../components/Skill_Display";

const skillList = {
  infrastructure: {
    title: "Infrastructure & DevOps",
    items: [
      { id: 1, name: "Linux", icon: "🐧" },
      { id: 2, name: "Bash", icon: "💻" },
      { id: 3, name: "Docker", icon: "🐳" },
      { id: 4, name: "CI/CD", icon: "⚙️" },
      { id: 5, name: "GitHub Actions", icon: "🚀" },
      { id: 6, name: "AWS", icon: "☁️" },
    ],
  },

  programming: {
    title: "Programming & Scripting",
    items: [
      { id: 7, name: "Python", icon: "🐍" },
      { id: 8, name: "JavaScript", icon: "🟨" },
      { id: 9, name: "TypeScript", icon: "🔷" },
      { id: 10, name: "C", icon: "🔧" },
      { id: 11, name: "Java", icon: "☕" },
    ],
  },

  frameworks: {
    title: "Frameworks & Platforms",
    items: [
      { id: 12, name: "React", icon: "⚛️" },
      { id: 13, name: "React Native", icon: "📱" },
      { id: 14, name: "Deno", icon: "🦕" },
      { id: 15, name: "Flask", icon: "🌶️" },
      { id: 16, name: "FastAPI", icon: "⚡" },
      { id: 17, name: "Vercel", icon: "▲" },
    ],
  },

  testing: {
    title: "Testing & Quality",
    items: [
      { id: 18, name: "Jest", icon: "🧪" },
      { id: 19, name: "Manual Testing", icon: "✅" },
      { id: 20, name: "Linting", icon: "✨" },
      { id: 21, name: "Debugging", icon: "🛠️" },
      { id: 22, name: "Git", icon: "🌿" },
      { id: 23, name: "GitHub", icon: "🐙" },
    ],
  },

  databasesAi: {
    title: "Databases & AI Tools",
    items: [
      { id: 24, name: "PostgreSQL", icon: "🐘" },
      { id: 25, name: "Neon", icon: "🗄️" },
      { id: 26, name: "Auth0", icon: "🔐" },
      { id: 27, name: "Transformers", icon: "🧠" },
      { id: 28, name: "Ollama", icon: "🦙" },
      { id: 29, name: "Local LLMs", icon: "💬" },
    ],
  },
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="section-kicker">What I work with</p>
        <h2 className="section-title">The tools I keep reaching for.</h2>
        <p className="section-subtitle skills-subtitle">
          A mix of languages, frameworks, infrastructure tools, and AI stack pieces
          I’ve used while building projects, debugging systems, and automating the
          parts of development that get repetitive fast.
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
