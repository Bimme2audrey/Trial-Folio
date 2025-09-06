import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: "HTML 5", percentage: 90 },
    { name: "CSS 3 Animation", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "ReactJS", percentage: 45 },
    { name: "Communication", percentage: 30 },
    { name: "Creativity", percentage: 60 },
    { name: "Team Work", percentage: 30 },
    { name: "Github", percentage: 60 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Skills 🎨</h2>
        </div>
        
        <div className="skills-content">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
