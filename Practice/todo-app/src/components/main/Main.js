import React from "react";
import ToDoItem from "./todoList/ToDoItem";
import toDoData from "./todoList/todoListData";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoData,
    };
  }
  render() {
    const toDoContainer = this.state.toDo.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));

    return <div className="main-container">{this.toDoContainers}</div>;
  }
}

export default Main;
