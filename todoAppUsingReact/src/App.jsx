import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from './hooks/useTasks';
import './styles/App.css';

const App = () => {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();

  return (
    <div className="container">
      <h1> Todo List</h1>
      <TaskInput onAdd={addTask} />
      <TaskList 
        tasks={tasks}
        onComplete={toggleComplete}
        onDelete={deleteTask} 
      />
      <p>Total : {tasks.length} | Completed : {tasks.filter(t => t.completed).length}</p>
    </div>
  )
  
  
}

export default App;