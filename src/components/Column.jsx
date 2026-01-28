import Task from './Task';



export default function Column({
    handleClick,
    estado,
    addTask,
    tasks,
    setEstado,
    setTasks,
    estadoColumna,
    inputValue,
    setInputValue}) {
    
   
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputValue)
        const uuid = crypto.randomUUID();
        addTask(inputValue, uuid, estadoColumna)
        setEstado('')
        setInputValue('')
    }
    
    return (
        <> 
        <section>
            <h2>{estadoColumna == 'to-do' ? 'Por Hacer' : estadoColumna =='doing' ? 'Haciendo' :'Hecho'}</h2>
            <form  onSubmit={handleSubmit}>
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
                            id="task_todo_title"
                            name="inputTask"
                            placeholder='Escribe tu tarea'  
                            className='task-input'
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}>
                        </input>
                    </>
                    )}
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
