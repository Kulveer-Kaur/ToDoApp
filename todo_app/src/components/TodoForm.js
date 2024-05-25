import React from "react";

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input
        type='text'
        className='todo-input'
        placeholder='What is activity today !'
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
