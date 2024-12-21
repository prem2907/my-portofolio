// src/components/Contact.jsx
import React from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
    const email = "prem.kumar.soni2907@gmail.com";
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <p>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
            <a href={`mailto:${email}`} className="button">Mail me</a>
        </div>
    );
};

export default Contact;
