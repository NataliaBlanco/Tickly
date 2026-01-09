import Task from './Task';



export default function Column({
    handleClick,
    estado,
    addTask,
    tasks,
    setEstado,
    setTasks,
    estadoColumna }) {
    
    
    function enterDownTask(ev) {
        if (ev.key === "Enter" && ev.target.value.trim() !== "") {
            ev.preventDefault();
            const uuid = crypto.randomUUID();
            addTask(ev.target.value, uuid, estadoColumna)
            ev.target.value = "";
            setEstado('')
        }
    }
    
    return (
        <> 
        <section>
            <h2>{estadoColumna == 'to-do' ? 'Por Hacer' : estadoColumna =='doing' ? 'Haciendo' :'Hecho'}</h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                    <button type="button" onClick={() => {
                        handleClick(estadoColumna)
                    }}>
                        <span>+</span>
                        <span>Añadir Tarea</span>
                    </button>
                {estado === estadoColumna && (<> 
                    <label htmlFor="task_todo_title"></label>
                        <input
                            type="text"
                            name=""
                            placeholder='Escribe tu tarea'  
                            className='task-input'
                            onKeyDown={enterDownTask}>
                        </input></>)}
            </form>
            <ul>
                <Task
                    tasks={tasks.filter(task => task.estado === estadoColumna)}
                    setTasks={setTasks}
                />
            </ul>
            </section>  
        </>
        
    );
}
