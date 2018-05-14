import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({ addToDo }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      addToDo(input.value)
      input.value=''
    }}>
      <input ref={i => input = i} placeholder="enter task"/>
    </form>
  )
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired
}

export default AddToDo