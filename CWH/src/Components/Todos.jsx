import React from 'react'
import Todolist from './Todolist'

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
    <Todolist todo={props.todos[0]}/>
    </div>
  )
}

export default Todos