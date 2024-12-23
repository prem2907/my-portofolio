// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Frontend Developer", "Software Developer"],
    loop: {}
  });

  return (
    <div className="home-container d-flex">
      <div className="text-section">
        <h1>Hello World</h1>
        <span className="intro">I'm Prem, a</span>
        <span className="autotext">
          {text}
          <Cursor cursorStyle="<" />
        </span>
        {/* <span style={{fontSize: '50px', fontWeight: 'bold'}}><Cursor cursorStyle= '<'/></span> */}
        <a href="/assets/my_resume.pdf" download>
          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            style={{ fontWeight: "500", fontSize: "20px" }}>
            Resume
          </button>
        </a>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/prem-soni-38a8b3207"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/icons/linkedin.svg" alt="" />
          </a>
          <a
            href="https://github.com/prem2907"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/icons/github.svg" alt="" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041768652905"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/icons/facebook.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/prem_kumar9779/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/icons/instagram.svg" alt="" />
          </a>
          <a
            href="https://leetcode.com/u/prem2907/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/icons/leetcode.svg" alt="" /> {/* Use appropriate icon for LeetCode */}
          </a>
        </div>
      </div>
      <div className="image-section">
        <img src="/assets/images/me_5.jpg" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Home;
