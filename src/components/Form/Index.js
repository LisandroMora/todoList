import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import TaskContext from '../../context/TaskContext';
import postTask from '../../services/Task/POST';
import putTask from '../../services/Task/PUT';
import { FormS } from './style';

function Form({ isFormOpen, setIsFormOpen, }) {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
    });
    const { selectedTask, setSelectedTask } = useContext(TaskContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (selectedTask) {
                putTask({ task: formData, id: selectedTask.id });
            } else {
                postTask(formData);
            }
            setFormData({
                title: '',
                date: '',
                description: '',
            });
            setIsFormOpen(false);
            Swal.fire({
                title: 'Success!',
                text: 'Task saved successfully!',
                icon: 'success',
            })
        }
        catch (e) {
            console.log(e);
        }
    };

    const handleClose = () => {
        setIsFormOpen(false);
        setSelectedTask(null);
    }

    useEffect(() => {
        if (selectedTask) {
            setFormData(selectedTask);
        }
        else {
            setFormData({
                title: '',
                date: '',
                description: '',
            });
        }
    }, [selectedTask]);

    return (
        <FormS className={isFormOpen && 'open'}>
            <div className='form-content'>
                <div className='form-content__inputs'>
                    <input type="text" placeholder="Title" name='title' onChange={handleChange} value={formData.title} />
                    <input type="date" placeholder="Due Date" name='date' onChange={handleChange} value={formData.date} />
                    <textarea type="text" placeholder="Description" name='description' onChange={handleChange} value={formData.description} />
                </div>
                <div className='form-content__buttons'>
                    <button type="button" className='cancel' onClick={handleClose}>Cancel</button>
                    <button type="submit" className='save' onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </FormS>
    );
}

export default Form;