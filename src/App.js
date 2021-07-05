import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

// compare elements in the virtual dom to the ones in the old dom to create the actual dom

function App() {
  const [todos, setTodos] = useState([]) // takes in an initial state + function used to set state, returns tuple

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) { // if storageTodos is not null...
      setTodos(storageTodos); // update the todos list
    }
  }, []); // empty array means this will only happen when the window renders?

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)); // use local storage key and make the todos into a string

  }, [todos]); // takes in function and dependency array - if any variable in the array changes, the event will fire

  function addTodo(todo) {
    setTodos([todo, ...todos]); // ... : "spreads" stuff from one array
  } // creates a new array with setTodos and updates it with passed todo

  function toggleComplete(id) { // passed as a prop to todoList and each todo
    setTodos(
      todos.map(todo => {
        if (todo.id === id) { // if the id of the todo matches with the id passed in,
          return {
            ...todo,
            complete: !todo.complete // negate the value of its property: complete
          };
        }
        return todo; // if it's not, just return todo as is
      })
    );
  }

  function removeTodo(id) { // pass in a todo's id: keep all todos that do not have this id
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return ( // the type of stuff below is called "JSX:" a shorthand way of writing out a tree of HTML elements.
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

// Document Object Model (underlying tree of elements)
// properties or props: parameters that live on jsx elements - look identical to html properties
// a diff: written in js, camelCase
// unidirectional: top -> down (parents -> children)

export default App;
