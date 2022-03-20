import React from 'react';
import { NewTaskS } from './style';

function NewTask({ setIsFormOpen }) {
    return (
        <NewTaskS onClick={() => setIsFormOpen(true)}>
            <div className='container'>
                <span>+</span>
                <span>New Todo</span>
            </div>
        </NewTaskS>
    );
}

export default NewTask;