import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({ addItem }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      addItem(input.value)
      input.value=''
    }}>
      <input ref={i => input = i} placeholder="enter task"/>
    </form>
  )
}

AddToDo.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default AddToDo