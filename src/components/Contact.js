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
    <section>
      <h1 className="contact-heading text-center font-bold font-italic">
        Contact
      </h1>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="single-contact text-center">
            <i className="fa fa-home"></i>
            <h3>Location</h3>
            <p>Perth, Western Australia</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="single-contact text-center">
            <i className="fa fa-phone"></i>
            <h3>Phone: </h3>
            <p>0470303235</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="single-contact text-center">
            <i className="fa fa-envelope-o"></i>
            <h3>Email</h3>
            <p>r.vasavi04@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container container-fluid rounded" id="contact">
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
    </section>
  );
}
export default Contact;
