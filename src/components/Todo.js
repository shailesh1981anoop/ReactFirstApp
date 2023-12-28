import {useReducer, useState} from 'react'
import React from 'react'
import Head from './Head';
import TodoList from './TodoList';
import { TodoContext } from '../context/TodoContext';
import Reset from './Reset';
import { Box, Button, Container, TextField } from '@mui/material';
export const initialState=[];

function init(initialState)
{ 
    //const result=[...initialState,{id:'1',name:'reading'}]
return initialState;
}
function reducer (state,action)
{
switch(action.type)
{
    case 'ADD_TASK':
        return [
            ...state,
            {
                id:state.length+1,
                name:action.paylod,
            }
        ];
        case 'DELETE_TASK':
        return state.filter(d=>d.id!==action.paylod)
        case 'RESET_TASK':
            return init(action.paylod)
        default: return state
}
}

function Todo() {
    const[username,setUsername]=useState();
    const[todos,dispatch]=useReducer(reducer,initialState)

    const handleInputChange = (e) => {
        setUsername(e.target.value);
      };

     function btnAddClick()
     {
        dispatch({type:'ADD_TASK',paylod:username})
     }
    //  function btnReset ()
    // {
    //     debugger;
    //     dispatch({type:'RESET_TASK',paylod:initialState})
    // }
const data={
    todos,
    dispatch
}
console.log('in-',data)
  return (
    <Container>
        <Box>
    <TodoContext.Provider value={{data}}>
    {/* <h2>TodoList {todos.length}</h2> */}
    <Head />
    New  Test Item<TextField type='text' name="username"
                    value={username}
                    placeholder="Enter User Name"
                    onChange={handleInputChange}
                    required
                    label="username"></TextField>
    <Button variant='contained'
    onClick={btnAddClick}>
        Add</Button>
        <Reset />
        {/* <button onClick={btnReset}>Reset</button> */}
         <TodoList /> 
        
    </TodoContext.Provider>
    </Box>
    </Container>
  )
}
export default Todo