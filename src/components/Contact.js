import React from "react";
import Fade from "react-reveal/Fade";
import "./Styles/Contact.css";

// Contact component
function Contact({
  
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
     
    </section>
  );
}
export default Contact;
