import React from 'react'

const Todolist = ({todo}) => {
  return (
    <>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger">Delete</button>
    </>
  )
}

export default Todolist