function SkillDisplay({ category }) {
    return (
      <div className="skill-card">
        <h3>{category.title}</h3>
  
        <div className="skill-pill-container">
          {category.items.map((skill) => (
            <span className="skill-pill" key={skill.id}>
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default SkillDisplay;