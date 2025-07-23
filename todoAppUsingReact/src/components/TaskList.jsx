import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onComplete, onDelete }) => {
    if(tasks.length === 0) return <p>No Tasks. What's on your mind...</p>

    return (
        <ul>
            {
                tasks.map(task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onComplete={onComplete}
                        onDelete={onDelete}
                    />
                ))
            }
        </ul>
    );
    
}

export default TaskList;