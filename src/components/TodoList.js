import {useReducer, useState} from 'react'
import React from 'react'

const initialState=[];

function init(initialState)
{ 
    const result=[...initialState,{id:'1',name:'reading'}]
return result;
}

function reducer (state,action)
{
    debugger;
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

function TodoList() {
    const[username,setUsername]=useState();
    const[todos,dispatch]=useReducer(reducer,initialState,init)

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

  return (
    <>
    <h2>TodoList {todos.length}</h2>
    <input type='text' name="username"
                    value={username}
                    placeholder="Enter User Name"
                    onChange={handleInputChange}
                    required
                    label="username"></input>
    <button 
    onClick={btnAddClick}>
        Add</button><button onClick={btnReset}>Reset</button>
    {todos.map(todo=><li key={todo.id}>{todo.name}
    <span>
        <button onClick={()=>dispatch({type:'DELETE_TASK',paylod:todo.id})}>
            Delete</button>
            </span>
    </li>)}
    </>
  )
}

export default TodoList