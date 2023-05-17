import { useState } from 'react'
import Header from './components/Headers'
import Tasks from './components/Tasks'
import AddTask from './components/AddTasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([]) //setTasks is used to change the tasks since states are immutable meaning it can only be changed one way.
  
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id,...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}  

//Toggle reminder
const reminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder } : task) )
}

  return (
    <div className="container">
       <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
       {showAddTask && <AddTask onAdd={addTask}/>}
       { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/>) : ('No Tasks to show ')}
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
