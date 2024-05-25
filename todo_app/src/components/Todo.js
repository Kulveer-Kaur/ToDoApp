import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
  id,
  task,
  isCompleted,
  isEditing,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className='Todo'>
      <p>{task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};
