import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      period: "",
      institution: "Siantou University Institute, Yaounde",
      title: "College Education",
      subtitle: "",
      description: "Studied Computer Sciences, specialised in web development, working towards my frontend web developer career."
    },
    {
      period: "May 2024 - August 2024",
      institution: "Zotech Designs",
      title: "Soft/Technical skills training (ReactJS)",
      subtitle: "Student Intern",
      description: "Student intern, frontend web development training, gaining competences in team work, soft skills training, exposure to real time projects."
    },
    {
      period: "July 2023 - August 2023",
      institution: "Highupweb Academy",
      title: "Web Development",
      subtitle: "Student Intern",
      description: "Student intern."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-heading">
          <h2>Education/Experience 🔮</h2>
        </div>
        
        <div className="education-timeline">
          <div className="timeline-container">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="period">{item.period}</h3>
                    <h4 className="institution">{item.institution}</h4>
                  </div>
                  
                  <div className="timeline-body">
                    <h5 className="title">{item.title}</h5>
                    {item.subtitle && <h6 className="subtitle">{item.subtitle}</h6>}
                    <p className="description">{item.description}</p>
                  </div>
                  
                  <div className="timeline-marker">
                    <i className="fa fa-circle"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
