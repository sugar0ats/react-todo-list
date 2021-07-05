import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex"}}>
      <Checkbox
        checked={todo.complete}
        onClick={handleCheckboxClick}
      />
      <Typography
        variant="body1"
        style={{
          color: "black",
          textDecoration: todo.complete ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );

}
//note: cannot export more than 1 element in a react component
// can attach custom styles to elements
// flex aligns elements horizontally
export default Todo;
