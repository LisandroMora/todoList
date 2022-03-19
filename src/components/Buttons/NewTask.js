import React from 'react';
import { NewTaskS } from './style';

function NewTask() {
    return (
        <NewTaskS>
            <div className='container'>
                <span>+</span>
                <span>New Todo</span>
            </div>
        </NewTaskS>
    );
}

export default NewTask;