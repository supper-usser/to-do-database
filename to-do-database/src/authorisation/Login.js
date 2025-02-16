import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
import React from 'react';
import { useState } from 'react';

export function Login({setActiveRegistration, activeLogIn, setActiveLogIn, setErrorMessageActive, setErrorMessage}){

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')


const login = async (e) => {
    e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            if(user) {
              setActiveLogIn(false)
              setActiveRegistration(false)
              window.document.body.style.overflow = 'auto'
            }
        }
        catch (error) {
          setErrorMessageActive(true)
          setErrorMessage('Ops, login or password is bad or user doesn\'t exist ')
            // console.log('Ops, login or password is bad')
        }
}
  
    function openLoginForm(){
        setActiveLogIn(false)
        setActiveRegistration(true)   
    }

return (
        <div className={activeLogIn ? "login-form active" : "login-form"} onClick={e => e.stopPropagation()}>
      <h1>Log in</h1>
        <form>
            <div className="form-control">
            <input type="email" placeholder="Email" required onChange={(e) => setLoginEmail(e.target.value)}/>
            </div>
            <div className="form-control">
            <input type="password" placeholder="Password" required onChange={(e) => setLoginPassword(e.target.value)}/>
            </div>
            <button className="btn" onClick={login}>Log IN</button>
            <p className="text">Haven't an account <span onClick={() => openLoginForm()}>Registration</span></p>
        </form>
     </div>
    )
  }





      // return ReactDOM.createPortal(
    //     <div className={activeLogIn ? "layout-form active" : "layout-form"} onClick={() => closeForm()}>

    // ...

       // ,  
     // document.getElementById('portal')