import React from "react";

import './ToDo.css'

import AddTask from "../AddTask/AddTask";
import TasksList from "../TasksList/TasksList";


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            value: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.doneTask = this.doneTask.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.value.trim() !== ''){
            const name = this.state.value;
            // const tasks = this.state.tasks.slice();
            // tasks.push({name: name, done: false})
            this.setState({
                tasks: [...this.state.tasks, {name: name, done: false, id: Math.random()}],
                value: '',
            });
        }
    }

    deleteTask(id) {
        // const tasks = this.state.tasks.slice();

        const newTasks = this.state.tasks.filter((it) => id !== it.id)

        // tasks.splice(task, 1)
        this.setState({
            tasks: newTasks,
        });
    }

    doneTask(id) {
        const newTasks = this.state.tasks.map((it) => it.id === id ? {...it, done: !it.done} : it)
        this.setState({
            tasks: newTasks
        })
    }


    render() {
        return (
            <div className='container'>
                    <div className='addTask'>
                        <AddTask
                            value={this.state.value}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}/>
                    </div>
                    <div className='tasksList'>
                        <TasksList
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            doneTask={this.doneTask}
                        />
                    </div>
            </div>
        )
    }
}

export default ToDo