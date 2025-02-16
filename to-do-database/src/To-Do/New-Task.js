import React from 'react';

export function NewTask({setNewTask, newTask, setAllTask}) {

    function handlerChange({target}){
    // const todo = target.value
    // const name = target.name
    const { value, name } = target
    // (prev) - ???
    setNewTask({id: new Date().toLocaleString(), [name]: value, isDone: false, key: Math.random()*1000})
 }

    function addToDo(){
        setAllTask((prev) => [ ...prev, newTask ])
        addTaskToDataBase()
        setNewTask({value: ''})
    }

    //database ...

    function addTaskToDataBase() {
        return fetch('https://to-do-withdatabase-default-rtdb.firebaseio.com/todos.json' , {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(response => {
        newTask.idFromDatabase = response.name
        // console.log('from new task: ', newTask)
        // console.log('from new task all task : ', allTask)
    })
} 


    return (
        <div className="new-task">
        <form onSubmit={e => e.preventDefault()}>
            <input onChange={handlerChange}
            name='todoTitle'
            value={newTask.todoTitle || ""}
            type="search"
            placeholder="New task..."
            />
           <button className="add-todo" type="submit" disabled={newTask.value === '' ? true : false} onClick={() => addToDo()}>+</button>
        </form>
        
        </div>
    )
}