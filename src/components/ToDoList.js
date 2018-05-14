import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleToDo, removeToDo }) => (
  <ul className="list">
    {todos.map((todo, index) =>
      <ToDoItem
        key={index}
        {...todo}
        onClick={() =>toggleToDo(index)}
        onRemove={() => removeToDo(index)}
      />
    )}
  </ul>
)

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleToDo: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
}

export default ToDoList

