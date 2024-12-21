// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    return (
        <footer className="footer">
            <p className='empty'></p>
            <p>Made with ❤️ by Prem, share and follow me on GitHub</p>
            <i onClick={scrollToTop} className="bi bi-arrow-up-circle scroll-to-top"></i>
        </footer>
    );
};

export default Footer;
