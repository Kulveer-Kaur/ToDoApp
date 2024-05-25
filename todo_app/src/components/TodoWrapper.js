import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
  };
  /* return (
    <div className='TodoWrapper'>
      <h1>Things to do !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  ); */
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {todos.map((e, index) => {
        /* return <Todo {...e} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>; */
        return e.isEditing ? (
          <EditTodoForm editTodo={editTask} task={e} />
        ) : (
          <Todo
            {...e}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};
