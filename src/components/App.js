import React, { useState } from 'react';
import TodoItem from './Todoitem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showList, setShowList] = useState(false);

  const addTask = () => {
    if (inputText) {
      setTasks([...tasks, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? {...task, text: newText} : task));
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Add a task..." />
        <button onClick={addTask}>Enter</button>
      </div>
      <button onClick={toggleList}>{showList ? 'Hide' : 'Show'} Tasks</button>
      {showList && (
        <ul>
          {tasks.map(task => (
            <TodoItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
