import React from "react";

function Todo({ todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex"}}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
      style={{
        color: "white",
        textDecoration: todo.complete ? "line-through" : null
      }}>{todo.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );

}
//note: cannot export more than 1 element in a react component
// can attach custom styles to elements
// flex aligns elements horizontally
export default Todo;
