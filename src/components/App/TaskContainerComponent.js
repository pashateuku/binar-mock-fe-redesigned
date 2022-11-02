import React from 'react';

import TaskListComponent from './TaskListComponent.js'


function TaskContainerComponent(token) {

    return (
        <div className='app-white__task-container'>
            <TaskListComponent />
        </div>
    )

}

export default TaskContainerComponent;

