import React, { useReducer } from 'react'

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INIT: "initialise",
    DIX: "dix"
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            console.log("je pourrais faire une trentaine d'action differente")
            if (state.count >= 10) {
                return { count: count.count }
            }
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "initialise":
            return { count: count.count }
        case "dix":
            return { count: state.count + (Math.random() * 1000) }
        default:
            return alert("error")
    }
}

let count = {
    count: 0,

} // step 2 initialise object 

const UseReducerInt = () => {
    const [state, dispatch] = useReducer(reducer, count) //  step 1

    return (
        <div className='' style={{ color: "" }}>

            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            <button onClick={() => dispatch({ type: "initialise" })}>initialise</button>
            <button onClick={() => dispatch({ type: "dix"})}>rajoute 10</button>
            {state.count}
        </div>
    )
}

export default UseReducerInt
