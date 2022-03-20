import React from 'react';
import { FormS } from './style';

function Form({ isFormOpen, setIsFormOpen }) {
    return (
        <FormS className={isFormOpen && 'open'}>
            <div className='form-content'>
                <div className='form-content__inputs'>
                    <input type="text" placeholder="Title" />
                    <input type="date" placeholder="Due Date" />
                    <textarea type="text" placeholder="Description" />
                </div>
                <div className='form-content__buttons'>
                    <button type="button" className='cancel' onClick={() => setIsFormOpen(false)}>Cancel</button>
                    <button type="submit" className='save'>Save</button>
                </div>
            </div>
        </FormS>
    );
}

export default Form;