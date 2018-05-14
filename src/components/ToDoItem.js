import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ text, completed, onClick, onRemove }) => (
  <li>
    <div className="todo">
      <span className="todoText" onClick={onClick} style={{ textDecoration : completed ? 'line-through' : 'none' }}>{text}</span>
      <button className="todoDelete" onClick={onRemove}>🗑</button>
    </div>
  </li>
)

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ToDoItem