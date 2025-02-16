import './App.css';
import React from 'react';
import { useState } from 'react';
import { ErrorMessage } from './authorisation/ErrorMessage';
import { Login } from './authorisation/Login';
import { Registration } from './authorisation/Registration';
import { RegistrationSucceed } from './authorisation/RegistrationSucceed';
import { TaskList } from './To-Do/Task-List';
import { NewTask } from './To-Do/New-Task';
import { Form } from "./authorisation/Form";
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config';




function App() {
const [activeRegistration, setActiveRegistration] = useState(true)
const [activeLogIn, setActiveLogIn] = useState(false)
const [activeRegistratoinSucceed, setActiveRegistratoinSucceed] = useState(false)
const [newTask, setNewTask] = useState({value: ''}) //to omit console warning,init. state.
const [allTask, setAllTask] = useState([])
const [errorMessageActive, setErrorMessageActive] = useState(false)
const [errorMessage, setErrorMessage] = useState('')



const logout = async () => {
  await signOut(auth)
  setActiveLogIn(true)
  window.document.body.style.overflow = 'hidden'
}


return (
<div className="App">
 <Form 
Login={Login} 
Registration={Registration}
RegistrationSucceed={RegistrationSucceed}
ErrorMessage={ErrorMessage}
errorMessageActive={errorMessageActive}
setErrorMessageActive={setErrorMessageActive}
errorMessage={errorMessage}
setErrorMessage={setErrorMessage}
activeRegistration={activeRegistration} 
setActiveRegistration={setActiveRegistration}
activeLogIn={activeLogIn}
setActiveLogIn={setActiveLogIn}
activeRegistratoinSucceed={activeRegistratoinSucceed}
setActiveRegistratoinSucceed={setActiveRegistratoinSucceed}

/>

 <NewTask 
 newTask={newTask}
 setNewTask={setNewTask}
 setAllTask={setAllTask}
 allTask={allTask}
 />

 <TaskList 
 allTask={allTask}
 setAllTask={setAllTask}
 newTask={newTask}

 
 />
 
<button className='btn logout' onClick={() => logout()}>Log OUT</button>

    </div>
  );
}

export default App;


 /* <Registration 
 activeRegistration={activeRegistration} 
 setActiveRegistration={setActiveRegistration}
 activeLogIn={activeLogIn}
 setActiveLogIn={setActiveLogIn}
 closeForm={closeForm} />

 <Login 
 activeLogIn={activeLogIn}
 setActiveLogIn={setActiveLogIn}
 activeRegistration={activeRegistration}
 setActiveRegistration={setActiveRegistration}
 closeForm={closeForm} /> */