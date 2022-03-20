import React, { useState } from 'react';
import NewTask from '../Buttons/NewTask';
import Form from '../Form/Index';
import ContainerTasks from '../Tasks/Container';
import { MainContentS } from './style';

function MainContent() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <MainContentS>
            <ContainerTasks />
            <NewTask setIsFormOpen={setIsFormOpen} />
            <Form isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </MainContentS>
    );
}

export default MainContent;