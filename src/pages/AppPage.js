import React from 'react';
import '../assets/css/App.css';

import dummyProfileImg from '../assets/img/dummy-logo.png'
import settingImg from '../assets/img/setting.png'


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
                </div>
            </div>
        </div>

    )
}

export default App;
