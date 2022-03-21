import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react';
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
        }
        catch (e) {
            console.log(e);
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
                    <p className="date">
                        {task?.description}
                    </p>
                </div>
                <div className='task-content__buttons'>
                    <button onClick={handleEdit}>Editar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </TaskDetailS>
    );
}

export default TaskDetail;