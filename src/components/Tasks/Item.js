import React from 'react';
import { BsCircle, BsCircleFill, BsCalendarDate } from 'react-icons/bs';
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md';
import { TaskS } from './style';

function Task() {
    return (
        <TaskS>
            <div className='complete'>{true ? <BsCircle /> : <BsCircleFill />}</div>
            <div className='info'>
                <span>Titulo</span>
                <div className='info__date'><BsCalendarDate /> Fecha</div>
            </div>
            <div className='fav'>{true ? <MdOutlineFavoriteBorder /> : <MdFavorite />}</div>
        </TaskS>
    );
}

export default Task;