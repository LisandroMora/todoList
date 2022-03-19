import React from 'react';
import NewTask from '../Buttons/NewTask';
import { MainContentS } from './style';

function MainContent() {
    return (
        <MainContentS>
            <h1>To-Do List</h1>
            <NewTask />
        </MainContentS>
    );
}

export default MainContent;