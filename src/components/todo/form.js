import React from "react";
import useForm from "../../hooks/form.js";
import { Field, reduxForm } from "redux-form";
/**
 * Form for adding new todo items
 * @param {*} props 
 */
const TodoForm = props => {
  const { handleChange, handleSubmit } = useForm(props.handleSubmit);

  return (
    <>
      <h3>Add Item</h3>
      {/* <Form schema={schema} uiSchema={uiSchema} onSubmit={handleSubmit} /> */}
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <Field
            name="text"
            component="input"
            placeholder="Add To Do List Item"
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <Field
            type="range"
            component="input"
            min="1"
            max="5"
            name="difficulty"
          />
        </label>
        <label>
          <span>Assigned To</span>
          <Field
            type="text"
            component="input"
            name="assignee"
            placeholder="Assigned To"
          />
        </label>
        <label>
          <span>Due</span>
          <Field component="input" type="date" name="due" />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "todo"
})(TodoForm);
