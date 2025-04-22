import React from 'react';
import './Experience.css'; 

const Experience = () => {
  const experiences = [
    {
      title: "IT Support",
      company: "Ngoc Thach Trading & Service Co., Ltd.",
      period: "5/2024 - 8/2024",
      description: "Supported staff with IT-related issues and contributed to improving internal workflows through digital tools."
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <ul className="experience-list"> 
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company} · {exp.period}</p>
            <p className="description">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;