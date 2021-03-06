import { Button, TextField } from "@material-ui/core";
import React, {useState} from "react";
import {v4 as uuid} from 'uuid' //default import doesnt exist, have to specify specific version


function TodoForm( {addTodo} ) {
  const [todo, setTodo] = useState({ // define a state called todo, initialize it as an object with three properties - setTodo sets that state
    id: "",
    task: "", // text describing todo
    complete: false
  }); // because we cant change these properties all willy nilly (they're immutable)

  function handleTaskInputChange(e) { // takes in event, updates task property
    setTodo({...todo, task: e.target.value}); // contains new input
  } // old todo property spread, update its task property

  function handleSubmit(e) {
    e.preventDefault(); //prevent default browser submit functionality
    if (todo.task.trim()) { // if todos task is not empty
      addTodo({ ...todo, id: uuid() }); // {}: is a new object with todo's prop + id generated by uuid
      // reset task input
      setTodo({...todo, task: ""}); // empty string
    }
  } // spread syntax can be used with objects, presumably to edit them

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label = "Task"
        name = "task"
        type = "text"
        value = {todo.task}
        onChange = {handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );

}

export default TodoForm;

// event handlers: passed single parameter (synthetic event)
