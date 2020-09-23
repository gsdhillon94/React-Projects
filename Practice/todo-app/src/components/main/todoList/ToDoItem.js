import React, { Component } from "react";
// import toDoData from "./todoListData";

function ToDoItem(props) {
  return (
    <div className="item-container">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.description}</p>
    </div>
  );
}

export default ToDoItem;

// converting to a class based component
// using state to change and Update DOM
