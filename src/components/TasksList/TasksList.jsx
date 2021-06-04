import React from 'react';
import PropTypes from 'prop-types';

import './TasksList.css';

function TasksList(props) {
  const { tasks } = props;
  const newTasks = tasks.filter((task) => task.done === false);
  const doneTasks = tasks.filter((task) => task.done === true);

  return (
    <div className="taskList">
      <div className="taskList__content">
        {
                    newTasks.map((task) => (
                      <div className="taskList__item" key={task.id}>
                        <button
                          type="button"
                          className="taskList__button-done material-icons"
                          onClick={() => props.doneTask(task.id)}
                        >
                          done
                        </button>
                        <div
                          className="taskList__taskName"
                        >
                          {task.name}
                        </div>
                        <button
                          type="button"
                          className="taskList__button-delete material-icons"
                          onClick={() => props.deleteTask(task.id)}
                        >
                          delete
                        </button>
                      </div>
                    ))
                }
        <span className="taskList__doneTaskTitle">Завершенные задачи:</span>
        {
                    doneTasks.map((task) => (
                      <div className="taskList__itemDone">
                        <button
                          type="button"
                          className="taskList__button-undo material-icons"
                          onClick={() => props.doneTask(task.id)}
                        >
                          undo
                        </button>
                        <div
                          className="taskList__taskNameDone"
                        >
                          {task.name}
                        </div>
                        <button
                          type="button"
                          className="taskList__button-delete material-icons"
                          onClick={() => props.deleteTask(task.id)}
                        >
                          delete
                        </button>
                      </div>
                    ))
                }
      </div>
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
