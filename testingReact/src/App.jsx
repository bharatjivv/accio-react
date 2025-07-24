import React from 'react'
import { useState } from 'react'

const App = () => {
  const [tasks, addTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTasks = () => {
    addTasks((prev) => [...prev, newTask]);
    setNewTask('');
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter Task'
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleTasks}>Add Task</button>

      <ul>
        {
          tasks.map((task) => <li key={task}>{task}</li>)
        }
      </ul>


    </div>
  )
}

export default App