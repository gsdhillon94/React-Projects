import moment from "moment";
import React from "react";
export default function Task(props) {
  console.log(props);
  return (
    <tr>
      <td>{props.task.task}</td>
      <td>{moment(props.task.date.toDate()).calendar()}</td>
      <td>
        <span className="material-icons">check_circle</span>
      </td>
      <td>
        <span className="material-icons">delete</span>
      </td>
    </tr>
  );
}
