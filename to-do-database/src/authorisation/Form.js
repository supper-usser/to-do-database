import React from 'react'
import ReactDOM from 'react-dom';



export function Form({ Login, Registration, RegistrationSucceed, activeRegistratoinSucceed, setActiveRegistratoinSucceed,activeRegistration, setActiveRegistration, activeLogIn, setActiveLogIn, ErrorMessage, errorMessageActive, setErrorMessageActive, errorMessage, setErrorMessage}){


return ReactDOM.createPortal(
    <div className={activeRegistration || activeLogIn || activeRegistratoinSucceed || errorMessageActive ? "layout-form active" : "layout-form"}>

    <ErrorMessage 
    errorMessageActive={errorMessageActive}
    errorMessage={errorMessage}
    setErrorMessageActive={setErrorMessageActive}
    />

    <Registration 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    setActiveRegistratoinSucceed={setActiveRegistratoinSucceed}
    setErrorMessageActive={setErrorMessageActive}
    errorMessageActive={errorMessageActive}
    setErrorMessage={setErrorMessage}
    />

    <RegistrationSucceed 
    activeRegistratoinSucceed={activeRegistratoinSucceed}
    setActiveRegistration={setActiveRegistration}
    setActiveLogIn={setActiveLogIn}
    setActiveRegistratoinSucceed={setActiveRegistratoinSucceed}
    />

    <Login 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    setErrorMessageActive={setErrorMessageActive}
    setErrorMessage={setErrorMessage}
    />
</div>,
    document.getElementById('portal')
    )
}