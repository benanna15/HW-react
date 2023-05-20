import React, { useReducer } from 'react'



function reducer (state, action){
 
    
    switch (action.type) {
      
        case "increment":
           
            return {count : state.count + 1}

            case "decrement":
              if (state.count <= -11){
                return {count : state.count + 624  }}
            return {count : state.count - 1}

            case "aleatoire":
            
            return {count : state.count * Math.random() }

            case "reset":
            
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
      <button className='btn btn-info' onClick={()=> dispatch({type : "aleatoire"})}>Aleatoire</button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : "reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerSection
