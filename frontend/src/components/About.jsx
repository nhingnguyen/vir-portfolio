import React, { useState } from 'react';
import './About.css';
import aboutImage from './../assets/portfolio-1.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Git', 
    'Node.js', 'Express', 'MongoDB', 'Firebase', 'Python',
    'SQL', 'Figma'
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering, Industrial Information Technology',
      institution: 'LAB University of Applied Sciences',
      period: '2023-2027',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Profile" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-position">Web Developer</p>
          <div className="about-description">
            <p>
              I'm a dedicated student with a strong passion for web development 
              and modern web technologies. I enjoy building responsive, user-friendly interfaces 
              and continuously exploring new tools and frameworks to enhance the user experience.
            </p>
            <p>
            Driven by curiosity and a desire to grow, I approach each challenge as an opportunity 
            to learn and improve. I am eager to contribute to meaningful projects and learn from 
            experienced professionals. It will be an honor if granted this opportunity to take 
            the first step in building a successful career.
            </p>
            
            <div className="about-tabs">
              <button 
                className={`about-tab ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button 
                className={`about-tab ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'skills' ? (
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <div className="education-content">
                  {education.map((edu, index) => (
                    <div className="education-item" key={index}>
                      <h3>{edu.degree}</h3>
                      <p>{edu.institution} ({edu.period})</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default About;