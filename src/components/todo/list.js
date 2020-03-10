import React, { useContext, useState } from "react";
import { Unless, When } from "../if/";
import { SettingsContext } from "../../context/settings.js";
/**
 * Component for holding the todo items
 * @param {*} props 
 */
const TodoList = props => {
  const [page, setPage] = useState(0);
  const context = useContext(SettingsContext);

  const start = context.maxVisible * page;
  const end = start + context.maxVisible;
  const list = props.list.todoList ? props.list.todoList.slice(start, end) : [];

  return (
    <>
      <ul>
        {list.map(item => (
          <Unless condition={item.complete && !context.showCompleted}>
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
              <button onClick={() => props.handleDetails(item._id)}>
                Details
              </button>
              <button onClick={() => props.handleDelete(item._id)}>
                Delete
              </button>
            </li>
          </Unless>
        ))}
      </ul>

      <When condition={page > 0}>
        <button onClick={() => setPage(page - 1)}>Previous</button>
      </When>

      <When condition={props.list.todoList.length > end}>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </When>
    </>
  );
};

export default TodoList;
