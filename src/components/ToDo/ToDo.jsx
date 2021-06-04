import React from 'react';

import './ToDo.css';

import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    const { tasks } = this.state;
    if (value.trim() !== '') {
      const name = value;
      this.setState({
        tasks: [...tasks, { name, done: false, id: Math.random() }],
        value: '',
      });
    }
  }

  deleteTask(id) {
    const { tasks } = this.state;
    const newTasks = tasks.filter((it) => id !== it.id);
    this.setState({
      tasks: newTasks,
    });
  }

  doneTask(id) {
    const { tasks } = this.state;
    const newTasks = tasks.map((it) => (it.id === id ? { ...it, done: !it.done } : it));
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { value } = this.state;
    const { tasks } = this.state;
    const { handleChange } = this;
    const { handleSubmit } = this;

    return (
      <div className="container">
        <div className="addTask">
          <AddTask
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
        <div className="tasksList">
          <TasksList
            tasks={tasks}
            deleteTask={this.deleteTask}
            doneTask={this.doneTask}
          />
        </div>
      </div>
    );
  }
}

export default ToDo;
