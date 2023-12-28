import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Box, Button, List, ListItem, ListItemText } from '@mui/material'

function TodoList() {
  const{data}=useContext(TodoContext)
  console.log('TODO-',data.todos)
  return (
   <>
    
   {/* {
   data.todos.map(todo=>(<li key={todo.id}>{todo.name}
     <span>
        <button onClick={()=>data.dispatch({type:'DELETE_TASK',paylod:todo.id})}>
            Delete</button>
            </span> 
    </li>))} */}
    
    <Box component="div" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
   data.todos.map(todo=>(
    <ListItem disableGutters key={todo.id}>
<ListItemText primary={`Line- ${todo.id} ${todo.name}`} /><span>
        <Button variant='contained' onClick={()=>data.dispatch({type:'DELETE_TASK',paylod:todo.id})}>
            Delete</Button>
            </span>
    </ListItem>
    ))}
    
    </Box>

    </>
  )
   }


export default TodoList