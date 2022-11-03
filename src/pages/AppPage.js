import React from 'react';
import '../assets/css/App.css';

import dummyProfileImg from '../assets/img/dummy-logo.png'
import settingImg from '../assets/img/setting.svg'
import logoutIcon from '../assets/img/logout-icon.svg'
import aboutIcon from '../assets/img/about-icon.svg'

import TaskFormAddComponent from '../components/App/TaskFormAddComponent'
import TaskContainerComponent from '../components/App/TaskContainerComponent'

function App() {
    // Validator Token
    const token = localStorage.getItem('token');
    if(!token){
      window.location.href = '/login'
    }

    // Logout Handler
    const handleLogOut = () => {
        localStorage.clear('token');
        window.location.href = '/'
      }

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
                            <img className='setting-icon' src={settingImg} alt=''></img>
                            <div className='dropdown-menu-app'>
                                <div onClick={handleLogOut} className='dropdown-menu-app__list'>
                                    <p>Log Out</p>
                                    <img src={logoutIcon} alt=''/>
                                </div>
                                <div className='dropdown-line'/>
                                <div className='dropdown-menu-app__list'>
                                    <p>About</p>
                                    <img src={aboutIcon} alt=''/>
                                </div>
                            </div>
                        </div>
                    </header>
                    <h2 className='app-white-title'>All Task</h2>
                    <TaskFormAddComponent tokenId={token}/>
                    <TaskContainerComponent tokenId={token}/>
                </div>
            </div>
        </div>

    )
}

export default App;
