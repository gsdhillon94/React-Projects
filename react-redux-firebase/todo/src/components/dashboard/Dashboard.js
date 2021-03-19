import React from "react";
import AddTask from "../Task/AddTask";
import Tasks from "../Task/Tasks";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}
