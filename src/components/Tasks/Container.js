/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import FilterContext from '../../context/FilterContext';
import getTasks from '../../services/Task/GET';
import Task from './Item';
import { TasksContainerS } from './style';

function ContainerTasks() {
    const [tasks, setTasks] = useState([]);
    const [filterTask, setFilterTask] = useState([]);
    const { filter } = useContext(FilterContext);

    useEffect(() => {
        getTasks().then(tasks => setTasks(tasks));
    }, []);

    useEffect(() => {
        setFilterTask(tasks);
    }, [tasks]);

    useEffect(() => {
        if (filter) {
            let newTasks = [];
            switch (filter) {
                case 'all':
                    newTasks = tasks;
                    break;
                case 'pending':
                    newTasks = tasks.filter(task => !task.completed);
                    break;
                case 'completed':
                    newTasks = tasks.filter(task => task.completed);
                    break;
                case 'favorites':
                    newTasks = tasks.filter(task => task.fav);
                    break;
                default:
                    break;
            }
            setFilterTask(newTasks);
        }
    }, [filter]);

    return (
        <TasksContainerS>
            {filterTask.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </TasksContainerS>
    );
}

export default ContainerTasks;