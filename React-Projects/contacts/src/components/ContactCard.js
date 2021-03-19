import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contactCard.css";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faDailymotion } from "@fortawesome/free-brands-svg-icons";

export default function ContactCard(props) {
  return (
    <div className="card-container">
      <h4> {props.data.name}</h4>
      <div>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> {props.data.email}
      </div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {props.data.phone}
      </div>
      <button onClick={() => props.seeDetail(props.data.id)}>
        See Details <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}
