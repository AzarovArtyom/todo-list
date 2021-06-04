import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.css';

function AddTask(props) {
  const { onSubmit } = props;
  const { value } = props;
  const { onChange } = props;
  return (
    <form className="addTask" onSubmit={onSubmit}>
      <div className="addTask__content">
        <button className="addTask__button material-icons" type="submit">add</button>
        <input
          className="addTask__input"
          type="text"
          placeholder="Добавить задачу"
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  );
}

AddTask.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
AddTask.defaultProps = {
  onSubmit: null,
  value: null,
  onChange: null,
};

export default AddTask;
