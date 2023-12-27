import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
const  Head=()=> {
    const {data} =useContext(TodoContext)
  return (
    <div>Head {data.todos.length}</div>
  )
}

export default Head