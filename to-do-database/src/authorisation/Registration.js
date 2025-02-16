import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export function Registration({activeRegistration, setActiveRegistration, setActiveLogIn, setActiveRegistratoinSucceed, setErrorMessageActive, setErrorMessage, errorMessageActive}){

const [registerEmail, setRegisterEmail] = useState('')
const [registerPassword, setRegisterPassword] = useState('')

//clear inputs to complete
function handlerEmailInput(e, toClear){
    setRegisterEmail(e.target.value)
}

function handlerPasswordInput(e, toClear){
    setRegisterPassword(e.target.value) 
}



const register = async (e) => {
    e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            // CLEAR INPUTS! to fix!
            registrationSucceedMessage()
            clearInputs()
        }
        catch (error) {
            if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                setErrorMessageActive(true)
                setErrorMessage('Password should be at least 6 characters')
            }else if(error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setErrorMessageActive(true)
                setErrorMessage('User already exist')
            }
        }
    }


    function openRegistrationForm(){
        setActiveRegistration(false)
        setActiveLogIn(true)
    }

    function registrationSucceedMessage() {
        setActiveRegistration(false)
        setActiveLogIn(false)
        setActiveRegistratoinSucceed(true)
        }


        // to complete
    function clearInputs() {
        handlerEmailInput(null, true)
        handlerPasswordInput(null, true)
    }


return (
    <div className={activeRegistration ? "registration-form active" : "registration-form"} onClick={e => e.stopPropagation()}>
      <h1>Registration</h1>
        <form>
            <div className="form-control">
                <input type="email" placeholder="Email" required onChange={handlerEmailInput}/>
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" required onChange={handlerPasswordInput}/>
            </div>
            {/* <div className="form-control">
                <input type="password" placeholder="Confirm password" required />
            </div> */}
            <button className="btn" type='submit' onClick={register} >Registration</button>
            <p className="text">Have an account? <span onClick={() => openRegistrationForm()}>Log in</span></p>
            </form>
         </div>
        )
     }

  //     return ReactDOM.createPortal(
//  <div className={activeRegistration ? "layout-form active" : "layout-form"} onClick={() => closeForm()}>

        // ...

        // </div>
        // ,
        // document.getElementById('portal')

