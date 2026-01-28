import Column from "../components/Column";
import { useEffect } from 'react';

export function columna() {
    let lista = ['to-do', 'doing','done']
    
}



export default function Board({
    estado,
    setEstado,
    tasks,
    setTasks,
    inputValue,
    setInputValue}) {
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
            
        } else {
            localStorage.removeItem('tasks')
        }
    }, [tasks])

    function handleClick(columna) {
        setEstado(columna)
    };

    function addTask(text, uuid,columna) {
        setTasks([
        ...tasks,
            {
                text,
                'id': uuid,
                'estado': columna
             }
        ])
        
    }

    
    return (
        <>
            <Column
                estadoColumna='to-do'
                handleClick= {handleClick}
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <Column
                estadoColumna='doing'
                handleClick= {handleClick}
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <Column
                estadoColumna='done'
                handleClick= {handleClick}
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </>
    );
}

