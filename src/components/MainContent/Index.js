import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import NewTask from '../Buttons/NewTask';
import Form from '../Form/Index';
import ContainerTasks from '../Tasks/Container';
import { MainContentS } from './style';

function MainContent() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { selectedTask } = useContext(TaskContext);

    useEffect(() => {
        if (selectedTask) {
            setIsFormOpen(true);
        }
    }, [selectedTask]);
    return (
        <MainContentS>
            <ContainerTasks />
            <NewTask setIsFormOpen={setIsFormOpen} />
            <Form isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </MainContentS>
    );
}

export default MainContent;