import React from 'react';
import '../assets/css/App.css';

import dummyProfileImg from '../assets/img/dummy-logo.png'
import settingImg from '../assets/img/setting.png'
import addButtonImg from '../assets/img/add-button.png'
import taskSettingImg from '../assets/img/list-setting.png'


function App() {

    return (
        <div className="app">
            <div className='app-body'>
                <div className='app-white-parent'>
                    <header className='app-white-head'>
                        <div className='app-white-head__left'>
                            <img src={dummyProfileImg} alt=''></img>
                            <h3>Welcome, 1234</h3>
                        </div>
                        <div className='app-white-head__right'>
                            <img src={settingImg} alt=''></img>
                        </div>
                    </header>
                    <h2 className='app-white-title'>All Task</h2>
                    <form className='app-white-add_form'>
                        <input 
                            className='input-text'
                            type='text'
                            placeholder='insert new task'
                            id="desc"
                            name="desc"
                        />
                        <input type='image' className='image-button' src={addButtonImg} alt=''/>
                    </form>
                    <div className='app-white__task'>
                        <div className='app-white__task__left'>
                            <input type='checkbox'/>
                            <p>Get my mac fixed</p>
                        </div>

                        <div className='app-white__task__right'>
                            <img src={taskSettingImg} className='task-setting' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;
