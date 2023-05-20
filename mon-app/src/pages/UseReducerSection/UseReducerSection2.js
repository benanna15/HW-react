import React, { useReducer } from 'react'

const ACTION = {
  INCREMENT : "increment",
  DECREMENT : "decrement",
  RESET : "reset"
  
  }

function reducer (state, action){
    switch (action.type) {
        case ACTION.INCREMENT:
            if (state.count >= 10){
            return {count : 0 }
            }
            return {count : state.count + 1}

            case ACTION.DECREMENT:
            
            return {count : state.count - 1}

            case ACTION.RESET:
            
            return {count : count.count}
        
    
        default:
            break;
    }
}

let count = {count : 0}

const UseReducerSection = () => {
   // const [count, setCount] = useState();
  
    const[state, dispatch] =useReducer(reducer, count)
  return (
    <div className='container m-5 p-5'>
      Hello UseReducer
      Count : <h1>{ state.count }</h1>
      <button className='btn btn-success' onClick={()=> dispatch({type : "increment"})}>Incrementer</button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : "decrement"})}>Decrementer</button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : "reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerSection
