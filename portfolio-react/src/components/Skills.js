import React from 'react';
import './Skills.css';
import { Palette } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    { name: "HTML 5", percentage: 90 },
    { name: "CSS 3 Animation", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "ReactJS", percentage: 75 },
    { name: "Communication", percentage: 70 },
    { name: "Creativity", percentage: 80 },
    { name: "Team Work", percentage: 70 },
    { name: "Github", percentage: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Skills <Palette size={24} className="icon" /></h2>
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
