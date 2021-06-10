import React from 'react';
import { nanoid } from 'nanoid';

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
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, tasks } = this.state;
    if (value.trim() !== '') {
      this.setState({
        tasks: [...tasks, { name: value, done: false, id: nanoid() }],
        value: '',
      });
    }
  }

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((it) => id !== it.id),
    }));
  }

  doneTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    }));
  }

  render() {
    const { value, tasks } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="ToDo">
        <AddTask
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <TasksList
          tasks={tasks}
          deleteTask={this.deleteTask}
          doneTask={this.doneTask}
        />
      </div>
    );
  }
}

export default ToDo;
