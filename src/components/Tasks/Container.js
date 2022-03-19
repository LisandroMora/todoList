import React from 'react';
import Task from './Item';
import { TasksContainerS } from './style';

function ContainerTasks() {
    return (
        <TasksContainerS>
            <Task />
            <Task />
            <Task />
            <Task />
        </TasksContainerS>
    );
}

export default ContainerTasks;