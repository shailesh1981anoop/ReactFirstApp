import React from 'react'
import { useContext } from 'react';
import { initialState } from './Todo';
import { TodoContext } from '../context/TodoContext';
import { Button } from '@mui/material';
function Reset() {
const{data}=useContext(TodoContext)

      function btnReset ()
    {
        debugger;
        data.dispatch({type:'RESET_TASK',paylod:initialState})
    }
  return (
    <><Button variant='contained' onClick={btnReset}>Reset</Button></>
  )
}

export default Reset