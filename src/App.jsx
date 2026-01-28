import { useState } from 'react';
import './styles/App.css'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Board from './components/Board'


function App() {
const [estado, setEstado] = useState("");
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
})
  const [inputValue, setInputValue] = useState('')


  return (
<div className="app-container">
    <Header />
      <div className="layout">
        <NavBar />
        <Board
          estado={estado}
          setEstado={setEstado}
          tasks={tasks}
          setTasks={setTasks}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
    </div>
</div>
  )
};

export default App
