import React, { useRef } from 'react';
import '../assets/css/trialerror.css';


function App() {

    const promptPop = useRef()
    const errorButton = useRef()
  
    const HandleErrorPop = () => {
      if(!promptPop.current.classList[1]){
        promptPop.current.classList.add('content-active')
      } else {
        promptPop.current.classList.remove('content-active')
      }
    }

    return (
        <>
            <button type="button" onClick={HandleErrorPop} class="collapsible" ref={errorButton}>Open Collapsible</button>
            <div class="content" ref={promptPop}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </>
    )
}

    export default App;
