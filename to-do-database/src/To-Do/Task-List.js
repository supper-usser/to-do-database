import React, { useEffect } from 'react';

export function TaskList({ allTask, setAllTask }) {

    function noTodosMessege(){
        if (allTask.length === 0){ // first = allTast.length === 0
            return <h3>Not even todos yet :(</h3>
      }
}


    function deleteTodo(task){
        setAllTask((prev) => 
        prev.filter(tastToDelete => tastToDelete.id !== task.id))
}

function completeTodo(idToCheck){
    const updateTaskList = allTask.map(task => {
        if(task.id === idToCheck) {
            task.isDone = !task.isDone
        }
        return task
     })
        setAllTask(updateTaskList)
}

// Render list from database after log in

useEffect(() => {
    fetch('https://to-do-withdatabase-default-rtdb.firebaseio.com/todos.json')
    .then(res => res.json())
    .then(data => {
        if(data === null){
            setAllTask([])
            console.log("database is empty!")
        } else {
            const getListFromDataBase = () => Object.values(data).map(i => arrayFromDataBase.push(i))
            getListFromDataBase()
        }
    }) 
  }, [])

  const arrayFromDataBase = []

  useEffect(() => {
    setAllTask(arrayFromDataBase)
  }, [])



  

    return (
        <div className="task-list">
            <h2>To do:</h2>
            <ul>
                {noTodosMessege()}
                {allTask.map((task) => {
                    return <li key={task.key}>
                        <input 
                        type="checkbox" 
                        onClick={() => completeTodo(task.id)}/>
                        <p className={task.isDone ? 'check-up active' : 'check-up'}>
                        {task.todoTitle}
                        </p>
                        <small>{task.id}
                        <i onClick={() => deleteTodo(task)}>&times;</i>
                        </small>
                     </li>
                 })
                }
            </ul>
        </div>
    )
}