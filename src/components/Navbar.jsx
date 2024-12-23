// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img src='./assets/icons/home-icon.png'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul style={{fontSize: '20px'}} className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('about')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('resume')}>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
