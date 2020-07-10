import React from "react";
import "./Styles/Contact.css";

// Contact component
function Contact({
  handleSubmit,
  name,
  email,
  message,
  handleNameChange,
  handleMessageChange,
  handleEmailChange,
}) {
  return (
    <div className="container rounded" id="contact">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            className="form-control"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
