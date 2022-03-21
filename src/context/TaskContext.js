import React, { createContext, useState } from "react";

const TaskContext = createContext({});

export function TaskProvider({ children }) {
    const [selectedTask, setSelectedTask] = useState(null);
    return (
        <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>
            {children}
        </TaskContext.Provider>
    );
}
export default TaskContext;
