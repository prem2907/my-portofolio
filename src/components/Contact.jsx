// src/components/Contact.jsx
import React, { useRef } from "react";
import "./Contact.css"; // Import CSS for styling
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_iz6ptfj", "template_u181xoj", formRef.current, "qz3tjIYVtqKRZoQU6")
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent!"); // Show success notification
        formRef.current.reset(); // Reset the form
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message."); // Show error notification
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>
        My inbox is always open. Whether you have a question or just want to say hello, I'll try my
        best to get back to you! Feel free to mail me about any relevant job updates.
      </p>
      <form className="contact_form" onSubmit={sendEmail} ref={formRef}>
        <div className="input_container">
          <label htmlFor="emailFrom">Your Email:</label>
          <input placeholder="example@email.com" type="email" name="email_from" id="emailFrom" className="email_from" required />
        </div>
        <div className="input_container">
          <label htmlFor="message">Message:</label>
          <textarea placeholder="your message" name="message" id="message" className="message_box" required></textarea>
        </div>
        <button type="submit" className="btn41-43 btn-43">
          Send
        </button>
      </form>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </div>
  );
};

export default Contact;
