import React from 'react'

function DeleteBtn(props) {
  return (
    <>
      <button className='del-btn' onClick={() => props.onSelect(props.id)}>Delete</button>
    </>
  )
}

export default DeleteBtn