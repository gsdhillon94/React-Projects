import React from "react";
import "./contactCard.css";

export default function ContactCard(props) {
  return (
    <div className="card-container">
      <div>Name : {props.data.name}</div>
      <div>Username : {props.data.username}</div>
      <div>Email : {props.data.email}</div>
      <div>Phone : {props.data.phone}</div>
      <button onClick={() => props.seeDetail(props.data.id)}>
        See Details
      </button>
    </div>
  );
}
