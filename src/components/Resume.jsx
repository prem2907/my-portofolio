// src/components/Resume.jsx
import React from "react";
import "./Resume.css"; // Import CSS for styling

const Resume = () => {
  const experiences = [
    {
      id: 1,
      year: "2024",
      title: "Junior Software Developer",
      organization: "Publicis Resources",
      description:
        "I have developed and maintained high-performance web applications utilizing ASP.NET Core and MVC frameworks, ensuring a robust architecture and seamless user experiences. My role involves collaborating with the support team to troubleshoot and resolve application issues, which has significantly improved user satisfaction and reduced downtime. I also contribute to front-end development using Angular and AngularJS, crafting dynamic user interfaces that enhance engagement. Additionally, I assist in project planning and management, ensuring timely delivery of projects that meet all specified requirements while implementing best practices for coding, testing, and deployment to deliver efficient and reliable web solutions."
    },
    {
      id: 2,
      year: "2023",
      title: "Technology Intern",
      organization: "Publicis Resources",
      description:
        "I created responsive user interfaces using HTML, CSS, and JavaScript, effectively converting design concepts into functional web pages. During my internship, I developed maintainable and scalable UI components following industry best practices. I utilized the Fetch API and AJAX for data retrieval, focusing on error handling and providing real-time feedback. This role allowed me to gain valuable experience with technologies such as AngularJS, Bootstrap, Tailwind, Material UI, and jQuery."
    }
  ];

  const skills = [
    "C++",
    "JavaScript",
    "SQL",
    "ReactJS",
    "AngularJS",
    "Bootstrap",
    "HTML & CSS",
    "AJAX || jQuery",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "ASP.NET Core",
    "SQL Server",
    "Visual Studio",
    "VS Code",
    "Git || GitHub"
  ];

  return (
    <div className="resume-container">
      <h2 style={{ fontSize: "40px", marginBottom: "50px" }}>Resume</h2>
      <div className="resume-content">
        <div className="skills-container">
          {/* <h4>Skills</h4> */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">
                <i class="bi bi-arrow-right-circle-fill"></i> {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="divider">
        </div>
        <div className="experience-container">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              {/* <h4>{exp.year}</h4> */}
              <h4>{exp.title}</h4>
              <h6>{exp.organization}</h6>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
