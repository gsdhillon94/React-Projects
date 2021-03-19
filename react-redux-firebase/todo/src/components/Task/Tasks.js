import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { firestore } from "firebase";

function Tasks({ tasks }) {
  return (
    <table className="table table-dark">
      <thead>
        <tr className="text-info">
          <th scope="col">Task</th>
          <th scope="col">Added on</th>
          <th scope="col">Status</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((task) => {
            return <Task key={tasks.id} task={task} />;
          })}
      </tbody>
    </table>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
