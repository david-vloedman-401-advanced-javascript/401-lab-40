import React from "react";
import Login from "./components/auth/login";
import ToDo from "./components/todo/todo.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <ToDo />
      </>
    );
  }
}
