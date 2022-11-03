import React from 'react';
import taskSettingImg from '../../assets/img/list-setting.svg'

import { useDispatch } from 'react-redux';
import { deleteTodoAsync } from '../../features/todoSlice';

const TaskListComponent = ({ id, taskTitle}) => {
    
    const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
        // * Refresher Sementara
        window.location.href = '/'
	};

    return(
        <>
            {/* task component - start */}
            <div className='app-white__task'>
                <div className='app-white__task__left'>
                    <input type='checkbox'/>
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