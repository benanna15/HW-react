import React, {useReducer, useEffect} from 'react'

const ACTION = {
    INCREMENT : "increment",
    DECREMENT : "decrement",
    RESET : "reset", 
    INPUT : "input",
    CHANGE_COLOR : "changeColor", 
    MULTIPLIE : "multiplie",
    RANDOM : "random",
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT:
            return {...state, count :  state.count+ 1}
        case ACTION.DECREMENT:
            console.log("state",state)
            console.log("action",action)
            if (state.count === -11) {
                return {...state, count :  613} 
            }
            return {...state, count :  state.count - 1}
        case ACTION.RESET:
            return {...state, count :  count.count }
        case ACTION.INPUT:
            return {...state, userInput : action.payload}
        case ACTION.CHANGE_COLOR:
            console.log("color ",state.color)
            return {...state, color :  !state.color }
        case ACTION.MULTIPLIE:
            return {...state, count :  state.count  * action.payload }
        case ACTION.RANDOM:

            return {...state, count :  state.count  * Math.random() }
        default:
            return alert("error")
    }
}

const count =  {
    count : 0,
    userInput : "",
    color: false
}
const UseReducerAdvanced = () => {
    const [ state, dispatch] = useReducer(reducer, count)

    useEffect(()=> {
        console.log("state",state)
    },[state])

    return (
        <div className='bg-dark' >
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-8"></div>
                <div className="col-4 bg-secondary" style={{color: state.color ? "red" : "blue"}}>
                    <h1>Hello</h1>
                    <h2>{state.count}</h2>
                    <input type="text" className="form-control" value={state.userInput} onChange={(e)=>dispatch({type : ACTION.INPUT, payload : e.target.value})   } />
                    <button className='btn btn-success' onClick={() => dispatch({ type: ACTION.INCREMENT})}>Incrementer + </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type:  ACTION.DECREMENT })}>Decrementer - </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type:  ACTION.MULTIPLIE , payload : 10 })}>multiplie par 10 </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type:  ACTION.RESET })}>Reset  </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type: ACTION.CHANGE_COLOR })}>Change Color  </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type: ACTION.RANDOM })}>Random  </button>
                   

                </div>
            </div>
        </div>
    )
}

export default UseReducerAdvanced
