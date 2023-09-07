import React, { useReducer} from 'react'
import { ACTION } from "./ACTION"


function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT :
            if (state.count >= 10 ) {
                return {count : 0 }
            }
            return {count : state.count + 1 }
        case ACTION.DECREMENT:
            return {count : state.count - 1 }
        case ACTION.RESET:
            return {count : count.count }
    
        default:
    }
}

let count = {count : 0}

const UseReducerSection = () => {
    
    const [state, dispatch] = useReducer(reducer, count)

  return (
    <div className='container m-5 p-5 '>
      Hello useReducer
      Count : <h1>{state.count}</h1> 
      <button className='btn btn-success' onClick={()=> dispatch({type : ACTION.INCREMENT})}>Incrementer + </button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : ACTION.DECREMENT})}>Decrementer - </button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : ACTION.RESET})}>Reset  </button>
      
    </div> 
  )
}

export default UseReducerSection
