import React from "react";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contacts.imgUrl} alt="kitten_img"></img>
      <h3>{props.contacts.name}</h3>
      <p>Phone: {props.contacts.phone}</p>
      <p>Email:{props.contacts.email}</p>
    </div>
  );
}
