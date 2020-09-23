import React from "react";

function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgurl} alt="this is a tiger" />
      <h3>Name: {props.contact.name}</h3>
      <p>phone:{props.contact.phone}</p>
      <p>email: {props.contact.email}</p>
    </div>
  );
}

export default Contact;
