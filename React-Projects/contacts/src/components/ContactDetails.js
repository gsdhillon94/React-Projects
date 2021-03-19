import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faDirections,
  faGlobe,
  faHouseUser,
  faLocationArrow,
  faNewspaper,
  faPaperclip,
  faPhoneAlt,
  faSearchLocation,
  faStamp,
  faStar,
  faStreetView,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContactDetails(props) {
  return (
    <div>
      <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon>{" "}
      <h3>{props.data.name}</h3>
      <div>
        <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon> Username:{" "}
        <b>{props.data.username}</b>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email:{" "}
        <b>{props.data.email}</b>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> Phone:{" "}
        <b>{props.data.phone}</b>
      </div>
      <div>
        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> Website:{" "}
        <b>{props.data.website}</b>
      </div>
      <br></br>
      <b>Address:</b>
      <div>
        {props.data.address.suite}, {props.data.address.street},{" "}
        {props.data.address.city}, {props.data.address.zipcode}{" "}
        <FontAwesomeIcon
          className="direction"
          onClick={() =>
            window.open(
              "https://maps.google.com?q=" +
                props.data.address.geo.lat +
                "," +
                props.data.address.geo.lng
            )
          }
          icon={faDirections}
        ></FontAwesomeIcon>
      </div>
      <br />
      <b>Company:</b>
      <div>
        <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Name:{" "}
        <b>{props.data.company.name}</b>
      </div>
      <div>
        <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> Tagline:{" "}
        <b>{props.data.company.catchPhrase}</b>
      </div>
      <div>
        <FontAwesomeIcon icon={faStamp}></FontAwesomeIcon> Bs:{" "}
        <b>{props.data.company.bs}</b>
      </div>
    </div>
  );
}
