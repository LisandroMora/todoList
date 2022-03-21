import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import TaskContext from '../../context/TaskContext';
import db from '../../firebase/firebaseConfig';
import { TaskDetailS } from './style';

function TaskDetail({ task, isShowing, setIsShowing }) {
    const { setSelectedTask } = useContext(TaskContext);

    const handleEdit = () => {
        setSelectedTask(task);
        setIsShowing(false);
    }

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "tasks", task.id));
            setIsShowing(false);
            Swal.fire({
                title: 'Success!',
                text: 'Task deleted successfully!',
                icon: 'success',
            })
        }
        catch (e) {
            console.log(e);
            Swal.fire({
                title: 'Error!',
                text: 'Error deleting task',
                icon: 'error',
            })
        }
    }

    const handleClose = () => {
        setIsShowing(false);
        setSelectedTask(null);
    }

    return (
        <TaskDetailS className={isShowing && 'show'}>
            <div className='task-content'>
                <div className='close'>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className='task-content__info'>
                    <span className="date">{task?.date}</span>
                    <h1>{task?.title}</h1>
                    <p className="description">
                        {task?.description}
                    </p>
                </div>
                <div className='task-content__buttons'>
                    <button onClick={handleEdit} className="edit">Editar</button>
                    <button onClick={handleDelete} className="delete">Eliminar</button>
                </div>
            </div>
        </TaskDetailS>
    );
}

export default TaskDetail;