import React from 'react';
import taskSettingImg from '../../assets/img/list-setting.svg'

function TaskListComponent() {
    return(
        <>
            {/* task component - start */}
            <div className='app-white__task'>
                <div className='app-white__task__left'>
                    <input type='checkbox'/>
                    <p className='strikethrough'>Get my mac fixed</p>
                </div>
                <div className='app-white__task__right'>
                    <img src={taskSettingImg} className='task-setting' alt=''/>
                </div>
            </div>
            {/* task component - finish */}

            {/* task component - start */}
            <div className='app-white__task'>
                <div className='app-white__task__left'>
                    <input type='checkbox'/>
                    <p className='strikethrough'>This is the second, i dont even know what to write bro</p>
                </div>
                <div className='app-white__task__right'>
                    <img src={taskSettingImg} className='task-setting' alt=''/>
                </div>
            </div>
            {/* task component - finish */}
        </>
    )
    
}

export default TaskListComponent;