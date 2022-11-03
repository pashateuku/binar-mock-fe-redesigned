import React, { useEffect } from 'react';

import TaskListComponent from './TaskListComponent.js'

import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../features/todoSlice';


function TaskContainerComponent(tokenId) {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTodosAsync({ id: tokenId.tokenId }));
	}, [dispatch, tokenId]);

    const todos = useSelector((state) => state.todos);
    console.log(todos)

    return (
        <div className='app-white__task-container'>
            {todos.map((todo) => (
				<TaskListComponent id={todo.todo_id} taskTitle={todo.desc} status={todo.status}/>
			))}
        </div>
    )

}

export default TaskContainerComponent;

