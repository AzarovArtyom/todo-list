import React from 'react';
import PropTypes from 'prop-types';

import './TasksList.css';

function TasksList(props) {
  const { tasks } = props;
  const uncompletedTasks = tasks.filter((task) => task.done === false);
  const completedTasks = tasks.filter((task) => task.done === true);

  return (
    <div className="TaskList">
      {
        uncompletedTasks.map((task) => (
          <div className="TaskList-item" key={task.id}>
            <button
              type="button"
              className="TaskList-buttonDone material-icons"
              onClick={() => props.doneTask(task.id)}
            >
              done
            </button>
            <div
              className="TaskList-taskName"
            >
              {task.name}
            </div>
            <button
              type="button"
              className="TaskList-buttonDelete material-icons"
              onClick={() => props.deleteTask(task.id)}
            >
              delete
            </button>
          </div>
        ))
      }
      <span className="TaskList-doneTaskTitle">Завершенные задачи:</span>
      {
        completedTasks.map((task) => (
          <div className="TaskList-itemDone">
            <button
              type="button"
              className="TaskList-buttonUndo material-icons"
              onClick={() => props.doneTask(task.id)}
            >
              undo
            </button>
            <div
              className="TaskList-taskNameDone"
            >
              {task.name}
            </div>
            <button
              type="button"
              className="TaskList-buttonDelete material-icons"
              onClick={() => props.deleteTask(task.id)}
            >
              delete
            </button>
          </div>
        ))
      }
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.instanceOf(Object),
  doneTask: PropTypes.func,
  deleteTask: PropTypes.func,
};
TasksList.defaultProps = {
  tasks: null,
  doneTask: null,
  deleteTask: null,
};

export default TasksList;
