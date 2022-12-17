import { useState } from "react";
import "../styles.css";

function AddTodo(props) {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
 
  function handleFormSubmit(e) {
    e.preventDefault();
    const addedData = {
      id: Math.random(),
      text: todo.trim(),
      description: desc.trim()
    };

    props.getTodos(addedData);
    setTodo("");
    setDesc("");
  }

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="card card-design">
          <div className="card-body">
            <label className="display-6" htmlFor="todo">
              Todo Name:
            </label>
            <input
              className="input-field"
              name="todo"
              type="text"
              placeholder="Enter the name"
              value={todo}
              onChange={handleTodoChange}
            />
            <label className="display-6" htmlFor="todo">
              Todo Description:
            </label>
            <input
              className="input-field"
              name="Description"
              type="text"
              placeholder="Enter the description"
              value={desc}
              onChange={handleDescChange}
            />
            <button
              className="btn btn-dark btn-sm p-2 add-btn"
              type="submit"
              disabled={!todo || !desc}
            >
              ADD TODO
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;