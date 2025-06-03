import React from "react";
import { useState } from "react";
import '../App.css'

function Taskinput({ onAdd }) {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="TaskInput">
                    <div className="taskItems">
                    
                    <input value={text} onChange={(e)=> setText(e.target.value)}  placeholder="Enter the task"/>
                    <button className="addTaskk" type="submit">Add</button>
                </div>
            </div>
        </div>
                </form>
    </>
    )
}

export default Taskinput;