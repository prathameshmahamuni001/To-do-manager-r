import React from "react";
import '../App.css'

function Taskitem({ tasks, onToggle, onDelete }) {
    return (
        <div className="taskItem">
            <input
                type="checkbox"
                checked={tasks.completed}
                onChange={()=> onToggle(tasks.id)}
            />

            <span style={{ textDecoration: tasks.completed ? 'line-through' : 'none' }}>{tasks.text}</span>
            <button onClick={()=>onDelete(tasks.id)}>Delete</button>
        </div>
    )
}

export default Taskitem;