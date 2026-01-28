import { FaRegTrashAlt } from "react-icons/fa";


export default function Task({ tasks, setTasks, inputValue }) {

    const onDelete = (taskId) => {
        setTasks(prevTasks => prevTasks.filter((task) => task.id !== taskId))
    }
    return (
        <>{tasks.map((task, index) => (
            <li key={task.id}>   
                {task.text}
                    <span className="trash" id={task.id} onClick={() => onDelete(task.id)}>
                        <FaRegTrashAlt />
                     </span>
            </li>
            ))}
        </>);
}
