import { useState } from "react";

const TaskInput = ({ onAdd }) => {
    const [ text, setText ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return ;
        onAdd(text);
        setText('');
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter task ..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;
