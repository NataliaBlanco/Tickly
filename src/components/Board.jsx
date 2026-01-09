import Column from "../components/Column";
import { useEffect } from 'react';



export default function Board({estado, setEstado, tasks, setTasks}) {
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
                handleClick= {handleClick}
                estadoColumna='to-do'
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
            />
            <Column
                handleClick= {handleClick}
                estadoColumna='doing'
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
                />
            <Column
                handleClick= {handleClick}
                estadoColumna='done'
                estado={estado}
                addTask={addTask}
                tasks={tasks}
                setEstado={setEstado}
                setTasks={setTasks}
            />
        </>
    );
}

