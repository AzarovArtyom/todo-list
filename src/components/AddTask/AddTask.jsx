import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.css';

function AddTask(props) {
  const { onSubmit, value, onChange } = props;

  return (
    <form className="AddTask" onSubmit={onSubmit}>
      <div className="AddTask-content">
        <button className="AddTask-button material-icons" type="submit">add</button>
        <input
          className="AddTask-input"
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
