import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
const  Head=()=> {
    const {data} =useContext(TodoContext)
  return (
    <h3>Head {data.todos.length}</h3>
  )
}

export default Head