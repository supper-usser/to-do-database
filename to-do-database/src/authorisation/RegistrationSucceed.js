import React from 'react'


export function RegistrationSucceed({activeRegistratoinSucceed, setActiveLogIn, setActiveRegistration, setActiveRegistratoinSucceed}) {

    function openLogIn(){
        setActiveRegistratoinSucceed(false)
        setActiveRegistration(false)
        setActiveLogIn(true)
    }

    return (
        <div className={activeRegistratoinSucceed ? "registration-succeed-form active" : "registration-succeed-form"}>
        <h1>Registration succeed, then: </h1>
        <button className="btn" onClick={() => openLogIn()}>Log IN</button>
        </div>
    )

}