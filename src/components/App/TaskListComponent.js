import React from 'react';
import taskSettingImg from '../../assets/img/list-setting.svg'

import { useDispatch } from 'react-redux';
import { deleteTodoAsync } from '../../features/todoSlice';
import { toggleTodoAsync } from '../../features/todoSlice';

const TaskListComponent = ({ id, taskTitle, status}) => {
    
    const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

    const handleCheckboxClick = () => {
        console.log(!status)
		dispatch(toggleTodoAsync({ todo_id: id, reverseStatus: !status }));
	};

    return(
        <>
            {/* task component - start */}
            <div className='app-white__task'>
                <div className='app-white__task__left'>
                    <input 
                        type='checkbox'
                        checked={status}
                        onClick={handleCheckboxClick}
                    />
                    <p className='strikethrough'>{taskTitle}</p>
                </div>
                <div className='app-white__task__right'>
                    <input type='image' onClick={handleDeleteClick} src={taskSettingImg} className='task-setting' alt=''/>
                </div>
            </div>
            {/* task component - finish */}
        </>
    )
    
}

export default TaskListComponent;