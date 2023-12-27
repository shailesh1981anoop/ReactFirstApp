import React from 'react'
function TodoList({todos,dispatch}) {
  return (
   <>
    
   {todos.map((todo)=><li key={todo.id}>{todo.name}
     <span>
        <button onClick={()=>dispatch({type:'DELETE_TASK',paylod:todo.id})}>
            Delete</button>
            </span> 
    </li>)}
    </>
  )
}

export default TodoList