import Taskinput from "./Components/Taskinput"
import './App.css'
import { useEffect, useState } from "react"
import Taskitem from "./Components/Taskitem";
import Filters from "./Components/Filters";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const addTask = (text) => {
    setTasks([...tasks, {id:Date.now(), text, completed:false}])
  }
  
  const filteredTask = tasks.filter(tasks => {
    if (filter === 'active') return !tasks.completed;
    if (filter === 'completed') return tasks.completed;
    return true;
  })
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };


  return (
    <>
      <h1>Task manager</h1>
      <Taskinput onAdd={addTask} />
      <Filters currentFilter={filter} onChange={setFilter}/>
      {filteredTask.map(tasks => (
      <Taskitem
        key={tasks.id}
        tasks = {tasks}
        onToggle = {toggleTask}
        onDelete = {deleteTask}
      />
      ))}
      

    </>
  )
}

export default App
