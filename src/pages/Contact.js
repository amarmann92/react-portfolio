import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2 className="text-dark contact-header">Contact Me:</h2>
      <ul className="contact-list list-group list-group-flush">
        <li className="contact list-group-item">
          <h5>
            Email:{" "}
            <a href="mailto: amarmann92@gmail.com">amarmann92@gmail.com</a>
          </h5>
        </li>
        <li className="contact list-group-item">
          <h5>
            Github: <a href="https://github.com/amarmann92">amarmann92</a>
          </h5>
        </li>
        <li className="contact list-group-item">
          <h5>
            LinkedIn: <a href="#"></a>
          </h5>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
