import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import ViewTodo from "./components/ViewTodo";
import "./styles.css";

export default function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function getTodos(values) {
    setTodos((previousState) => {
      return [...previousState, values];
    });
  }

  function updatedTodo(updatedItem) {
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function removedTodo(removedItem) {
    setTodos(removedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo(todo);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  return (
    <div className="main-div container">
      <h2 className="p-4 bg-dark text-white text-center ">My Todo App</h2>
      {isEditing ? (
        <EditTodo
          todos={todos}
          prePopulateTodo={currentTodo}
          updatedTodo={updatedTodo}
          handleCancelClick={handleCancelClick}
        />
      ) : (
        <AddTodo getTodos={getTodos} />
      )}
      <br />
      <ViewTodo
        todos={todos}
        onRemovedItem={removedTodo}
        onEditClick={handleEditClick}
      />
      <br />
    </div>
  );
}