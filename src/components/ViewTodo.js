import "../styles.css";

function ViewTodo(props) {
  function handleDeleteClick(key) {
    const removeItem = props.todos.filter((todo) => todo.id !== key);
    props.onRemovedItem(removeItem);
  }

  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <div className="card card-list">
            <li className="card-body" key={todo.id}>
              <div className="list">
                <div className="list-text">
                  <span>
                    <b>{todo.text}</b>
                  </span>
                </div>
                <div className="list-desc">
                  <span>{todo.description}</span>
                </div>
                <div className="list-button">
                  <button
                    className="btn btn-outline-primary btn1"
                    onClick={() => props.onEditClick(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn2"
                    onClick={() => handleDeleteClick(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ViewTodo;