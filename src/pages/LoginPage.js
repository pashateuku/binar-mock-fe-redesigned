import React, { useRef, useState } from 'react';
import '../assets/css/form.css';
import '../assets/css/login.css';
import blackLogo from '../assets/img/simplydo-logo-black.png'
import spinnerWhite from '../assets/img/spinner-white.png'
import axios from 'axios';


function App() {

    // Validator Token
    const token = localStorage.getItem('token');
    if(token){
      window.location.href = '/'
    }

    //FOR Prompt Title and Message
    const promptPop = useRef()
    
    const [promptTitle, setPromptTitle] = useState('This is a Prompt')
    const [promptMessage, setPromptMessage] = useState("this is prompt message, if this message show, then there's a problem")
    
    //FOR Loading Spinner in Button
    const spinnerLoadingRef = useRef()

    const [disableButton, setDisableButton] = useState(false);

    //FOR USERNAME AND PASSWORD
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
  
    const LoadingStatus = (status) => {
        if(status === true){
            setDisableButton(true)
            spinnerLoadingRef.current.classList.add('spinner-active')
        }
        else if(status === false){
            setDisableButton(false)
            spinnerLoadingRef.current.classList.remove('spinner-active')
        }
    }

    const ShowPrompt = (status, title, message) => {
        
        // fill the value of element with response message
        setPromptTitle(title)
        setPromptMessage(message)

        // conditional to match the color styling (success or error)
        if(status === "success"){
            promptPop.current.classList.add('alert-active')

            promptPop.current.classList.remove('failed-alert')
            promptPop.current.classList.add('success-alert')
        } 
        else if(status === "failed"){
            promptPop.current.classList.add('alert-active')

            promptPop.current.classList.remove('success-alert')
            promptPop.current.classList.add('failed-alert')
        }
    }

    const HidePrompt = () => {
        promptPop.current.classList.remove('alert-active')
    }

    //HANDLE ON SUBMIT TO BACKEND
    const handleSubmit = async (e) => {
      e.preventDefault();
      
    // Hiding Prompt and Show Loading Spinner on Button
      HidePrompt()
      LoadingStatus(true)
    
    // Run Axios
      try {
            const result = await axios.post('https://todo-binar-api.herokuapp.com/login', {
                user_4id: userId,
                password: password
            })
            
            if(result.data.message === 'login success'){
                localStorage.setItem('token', result.data.data.token);
                ShowPrompt(
                    "success",
                    "Login Success",
                    "we will direct you to App in a few second"
                    )
                window.location.href = '/'
            }
            else {
                ShowPrompt(
                    "failed",
                    "Login Failed",
                    result.data.message
                    )
            }

            LoadingStatus(false)

      }
      catch (err) {
          ShowPrompt(
            "failed",
            "System Error",
            "Error happened, please try again later"
            )
          console.log(err.toString())
          LoadingStatus(false)
      }      
    }

  return (
    <div className="auth">
        <div className='auth-body'>
            <div className='form-parent'>
                <div className='form-body'>
                    <div className='form-header'>
                        <img className='form-header__logo' src={blackLogo} alt="simplydo" />
                    </div>

                    <div className='form-title'>
                        <h2>Sign In to your Account</h2>
                    </div>

                    {/* to do: put prompt here */}
                    <div className='form-alert' ref={promptPop}>
                        <h2>{promptTitle}</h2>
                        <p>{promptMessage}</p>
                    </div>

                    <form className='form-data-parent' onSubmit={handleSubmit}>
                        <p>User ID</p>
                        <input 
                            type='text'
                            placeholder='insert your 4 digits user ID'
                            minLength="4"
                            maxLength="4"
                            id="user_4id"
                            name="user_4id"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />

                        <p>Password</p>
                        <input 
                            type='password'
                            placeholder='insert your Password'
                            id="password"
                            name="password"
                            minLength="8"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className='login-button' disabled={disableButton ? true : false}>
                            
                            <div ref={spinnerLoadingRef} className='form-button-spinner'>
                                <img src={spinnerWhite} alt=''/>
                            </div>
                            <p>Login</p>
                            
                        </button>
                    </form>
                </div>
                <a className='form-link' href='/register'>Create Account?</a>
            </div>
        </div>
    </div>
  );
}

export default App;
