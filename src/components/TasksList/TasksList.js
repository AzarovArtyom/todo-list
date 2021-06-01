import React from "react";

import './TasksList.css'

function TasksList(props) {
    const tasks = props.tasks;
    const newTasks = props.tasks.filter(task => task.done === false)
    const doneTasks = props.tasks.filter(task => task.done === true)

    // [
    //     {
    //         id: 1,
    //         description: 'asdsad',
    //     },
    //     {
    //         id: 2,
    //         description: 'zxc',
    //     },
    // ]

    return (
        <div className='taskList'>


            <div className="taskList__content">
                {
                    newTasks.map((task, idx) => (
                        <div className='taskList__item' key={idx}>
                            {<button className='taskList__button-done material-icons'
                                     onClick={() => props.doneTask(task.id)}>{task.done ? "undo" : "done"}</button>}
                            <div
                                className={task.done ? "taskList__taskNameDone" : 'taskList__taskName'}>{task.name}</div>
                            {<button className='taskList__button-delete material-icons'
                                     onClick={() => props.deleteTask(task.id)}> delete</button>}
                        </div>
                    ))
                }
                <span className='taskList__doneTaskTitle'>Завершенные задачи:</span>
                {

                    doneTasks.map(task => (
                        <div className='taskList__itemDone'>

                            {<button className='taskList__button-undo material-icons'
                                     onClick={() => props.doneTask(task.id)}>{task.done ? "undo" : "done"}</button>}
                            <div
                                className={task.done ? "taskList__taskNameDone" : 'taskList__taskName'}>{task.name}</div>
                            {<button className='taskList__button-delete material-icons'
                                     onClick={() => props.deleteTask(task.id)}> delete</button>}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default TasksList