// src/components/Projects.jsx
import React from "react";
import "./Projects.css"; // Import CSS for styling

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CineChoice",
      description:
        "A movie recommendation system that offers personalized suggestions. Developed a dynamic front-end using AngularJS and integrated the TMDb API for real-time movie data retrieval",
      technologies: "AngularJS, Bootstrap, TMDb API",
      image: "/assets/projectpreview/CineChoice.jpg" // Update with actual image path
    },
    {
      id: 2,
      title: "TeamTrack",
      description:
        "A streamlined tool for managing employee data, tracking attendance, payroll, and leave requests. Built the back-end with ASP.NET Core MVC and a responsive UI using Bootstrap.",
      technologies: "ASP.NET, HTML/CSS, Bootstrap, SQL Server",
      image: "/assets/projectpreview/Employee-Management-System.jpg" // Update with actual image path
    },
    {
      id: 3,
      title: "TaskNest",
      description:
        "This web application is designed to manage tasks efficiently with features for creating, updating, and deleting tasks as needed. Built using ReactJS for the front-end and Node.js for the back-end functionality.",
      technologies: "ReactJS, Node.js, Express.js, MongoDB",
      image: "/assets/projectpreview/Task-Management-System.jpg" // Update with actual image path
    }
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={`${project.title} Preview`} className="project-image" />
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="technologies">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
