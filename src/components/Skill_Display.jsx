function SkillDisplay({ category }) {
  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <h3 className="skill-card-title">{category.title}</h3>
        {category.description && (
          <p className="skill-card-description">{category.description}</p>
        )}
      </div>

      <div className="skill-pill-container">
        {category.items.map((skill) => (
          <span className="skill-pill" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillDisplay;