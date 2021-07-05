import React from "react";
import Todo from "./Todo"

function TodoList({ todos, toggleComplete, removeTodo }) { // destructure todos
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/> // each one has to have a unique key?
      ))}
    </ul>
  );
}

export default TodoList;
