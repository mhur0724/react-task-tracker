import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";
const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
},
])

// Delete task
const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
}

// change Reminder
const toggleReminder = (id) => {
 setTasks(tasks.map(task => 
  task.id === id ? {...task, reminder : !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random()* 1000 + 1);
  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
}


const toggleAddTask = () => {
  setShowTaskForm(!showTaskForm);
}

  return (
    <div className="container">
      <Header toggleAddTask={toggleAddTask} showTaskForm={showTaskForm}/>
      {showTaskForm && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"}
    </div>
  )
}

export default App
