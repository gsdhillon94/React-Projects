import React from "react";

export default function ContactDetails(props) {
  return (
    <div>
      <h4>Contact Details</h4>
      <div>id: {props.data.id}</div>
      <div>name: {props.data.name}</div>
      <div>phone: {props.data.phone}</div>
      <div>email: {props.data.email}</div>
    </div>
  );
}
