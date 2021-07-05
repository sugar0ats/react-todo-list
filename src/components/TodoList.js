import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo"

function TodoList({ todos, toggleComplete, removeTodo }) { // destructure todos
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/> // each one has to have a unique key?
      ))}
    </List>
  );
}

export default TodoList;
