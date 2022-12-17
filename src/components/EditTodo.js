import { useEffect, useState } from "react";

function EditTodo(props) {
  const [currentTodo, setCurrentTodo] = useState({});

  const prePopulateTodos = props.prePopulateTodo;
  useEffect(() => {
    setCurrentTodo({ ...prePopulateTodos });
  }, [prePopulateTodos]);

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = props.todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    props.updatedTodo(updatedItem);
  }

  function handleEditTodoChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }

  function handleEditDescChange(e) {
    setCurrentTodo({ ...currentTodo, description: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <div className="card card-design">
          <div className="card-body">
            <label className="display-6" htmlFor="editTodo">
              Edit Todo:{" "}
            </label>
            <input
              className="input-field"
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.text}
              onChange={handleEditTodoChange}
            />
            <label className="display-6" htmlFor="editDesc">
              Edit Description:{" "}
            </label>
            <input
              className="input-field"
              name="editDesc"
              type="text"
              placeholder="Edit description"
              value={currentTodo.description}
              onChange={handleEditDescChange}
            />
            <div className="text-center">
              <button className="btn btn-success btn-sm edit-btn" type="submit">
                UPDATE
              </button>
              <button
                className="btn btn-secondary btn-sm edit-btn"
                onClick={props.handleCancelClick}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditTodo;