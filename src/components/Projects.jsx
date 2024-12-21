// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // Import CSS for styling

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'CineChoice',
            description: 'Movie recommendation system with personalized suggestions. Developed dynamic front-end using AngularJS and integrated TMDb API for real-time movie data.',
            technologies: 'AngularJS, Bootstrap, TMDb API',
            image: '/assets/projectpreview/cinechoice.jpg' // Update with actual image path
        },
        {
            id: 2,
            title: 'Employee Management System',
            description: 'Streamlined tool for managing employee data, tracking attendance, payroll, and leaves. Developed back-end with ASP.NET Core MVC and created responsive UI using Bootstrap.',
            technologies: 'ASP.NET Core, HTML, CSS, Bootstrap, SQL Server',
            image: '/assets/projectpreview/Employee-Management-System.jpg' // Update with actual image path
        },
        {
            id: 3,
            title: 'Task Management System',
            description: 'A web application to manage tasks efficiently with features for creating, updating, and deleting tasks. Built using ReactJS for the front-end and Node.js for the back-end.',
            technologies: 'ReactJS, Node.js, Express.js, MongoDB',
            image: '/assets/projectpreview/Task-Management-System.jpg' // Update with actual image path
        }
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            {projects.map((project) => (
                <div className={`project-card ${project.id % 2 === 0 ? 'right' : 'left'}`} key={project.id}>
                    <img src={project.image} alt={`${project.title} Preview`} className="project-image" />
                    <div className={`project-description ${project.id % 2 === 0 ? 'left' : 'right'}`}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className='technologies'>{project.technologies}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
