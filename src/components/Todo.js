import {useReducer, useState} from 'react'
import React from 'react'
import Head from './Head';
import TodoList from './TodoList';
import { TodoContext } from '../context/TodoContext';
const initialState=[];

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
     function btnReset ()
    {
        debugger;
        dispatch({type:'RESET_TASK',paylod:initialState})
    }
const data={
    todos,
}
//console.log('in-',data)
  return (
    <TodoContext.Provider value={{data}}>
    {/* <h2>TodoList {todos.length}</h2> */}
    <Head />
    New  Test Item<input type='text' name="username"
                    value={username}
                    placeholder="Enter User Name"
                    onChange={handleInputChange}
                    required
                    label="username"></input>
    <button 
    onClick={btnAddClick}>
        Add</button><button onClick={btnReset}>Reset</button>
         <TodoList todos={todos} dispatch={dispatch} /> 
        
    </TodoContext.Provider>
  )
}
export default Todo