import React, { useState } from 'react';
import { BsCircle, BsCircleFill, BsCalendarDate } from 'react-icons/bs';
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md';
import { TaskS } from './style';
import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import TaskDetail from '../TaskDetail/Index';

function Task({ task }) {
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [isFavorite, setIsFavorite] = useState(task.fav);
    const [isShowing, setIsShowing] = useState(false);

    const handleComplete = async (e) => {
        e.stopPropagation();
        setIsCompleted(!isCompleted);
        try {
            const TaskRef = doc(db, "tasks", task.id);
            await updateDoc(TaskRef, {
                completed: !isCompleted
            });
            alert("Document written with ID: ", TaskRef.id);
        } catch (e) {
            console.log(e);
            alert("Error adding document: ", e);
        }
    };

    const handleFav = async (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
        try {
            const TaskRef = doc(db, "tasks", task.id);
            await updateDoc(TaskRef, {
                fav: !isFavorite
            });
            alert("Document written with ID: ", TaskRef.id);
        } catch (e) {
            console.log(e);
            alert("Error adding document: ", e);
        }
    }

    return (
        <>
            <TaskS onClick={() => setIsShowing(true)} className={isCompleted && "task-completed"}>
                <div className='complete'
                    onClick={(e) => handleComplete(e)}>
                    {!isCompleted ? <BsCircle /> : <BsCircleFill />}
                </div>
                <div className='info'>
                    <span>{task?.title}</span>
                    <div className='info__date'><BsCalendarDate /> {task?.date}</div>
                </div>
                <div className='fav' onClick={(e) => handleFav(e)}>
                    {!isFavorite ? <MdOutlineFavoriteBorder /> : <MdFavorite />}
                </div>
            </TaskS>
            <TaskDetail task={task} isShowing={isShowing} setIsShowing={setIsShowing} />
        </>
    );
}

export default Task;