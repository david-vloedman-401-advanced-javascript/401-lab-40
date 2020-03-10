import React, { useEffect } from "react";
import { When } from "../if";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TodoItem from "./item.js";

import * as actions from "../../state/store/todo-action";

import Auth from "../auth/auth";

import "./todo.scss";
import { connect } from "react-redux";
/**
 * Main component for the ToDo Appliction
 * @param {*} props 
 */
const ToDo = props => {
  /**
   * Add an item
   * @param {*} data 
   */
  const _addItem = data => {
    data.complete = false;
    props.handlePost(data);
  };
  /**
   * 
   * @param {*} id 
   */
  const _deleteItem = id => {
    props.handleDelete(id);
  };
  /**
   * 
   * @param {*} id 
   */
  const _toggleComplete = id => {
    props.handleToggle(id);
  };
/**
 * 
 * @param {*} id 
 */
  const _toggleDetails = id => {
    props.handleDetails(id);
  };
/**
 * 
 */
  const _getTodoItems = () => {
    props.handleGet();
  };

  useEffect(() => {
    _getTodoItems();
  });

  return (
    <>
      <Auth capability="read">
        <header id="todoCount">
          <h2>
            There are{" "}
            {props.todo.todoList.filter(item => !item.complete).length} Items To
            Complete
          </h2>
        </header>
      </Auth>

      <section className="todo">
        <Auth capability="create">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>
        </Auth>

        <Auth capability="read">
          <div>
            <TodoList
              list={props.todo}
              handleComplete={_toggleComplete}
              handleDetails={_toggleDetails}
              handleDelete={_deleteItem}
            />
          </div>
        </Auth>
      </section>

      <When condition={props.todo.showDetails}>
        <TodoItem handleDetails={_toggleDetails} item={props.todo.details} />
      </When>
    </>
  );
};

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGet: () => dispatch(actions.getTodoItems()),
  handleDetails: id => dispatch(actions.details(id)),
  handlePost: data => dispatch(actions.postData(data)),
  handleToggle: id => dispatch(actions.toggle(id)),
  handleDelete: id => dispatch(actions.destroyData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
