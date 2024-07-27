import React, { useState } from 'react';

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={() => { editTask(task.id, editedText); setIsEditing(false); }}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
