import React from 'react';
import NewTask from '../Buttons/NewTask';
import ContainerTasks from '../Tasks/Container';
import { MainContentS } from './style';

function MainContent() {
    return (
        <MainContentS>
            <ContainerTasks />
            <NewTask />
        </MainContentS>
    );
}

export default MainContent;