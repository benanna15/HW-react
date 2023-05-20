import React, { useReducer } from 'react'
import {ACTION} from "./action"

function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT:
            console.log("je pourrais faire une trentaine d'action differente")
            if (state.count >= 10) {
                return { ...state, count: count.count }
            }
            return { ...state, count: state.count + 1 }
        case ACTION.DECREMENT:
            return { ...state, count: state.count - 1 }
        case ACTION.INIT:
            return { ...state, count: count.count, userInput: "" }
        case ACTION.DIX:
            return { ...state, count: state.count + (Math.random() * 1000) }
        case ACTION.INPUT:
            console.log("action input ouvert")
            return { ...state, userInput: action.payload }
        case ACTION.CHANGE_COLOR:
            return { ...state, color: !state.color }
        default:
            return alert("error")
    }
}

let count = {
    count: 0,
    userInput: "",
    color: false

} // step 2 initialise object 

const Test = () => {
    const [state, dispatch] = useReducer(reducer, count) //  step 1
    React.useEffect(() => {
        console.log("state", state)
    }, [state])
    return (
        <div className='' style={{ color: state.color ? "blue" : "red" }}>
            <input type="text" value={state.userInput} onChange={(e) => dispatch({ type: ACTION.INPUT, payload: e.target.value })} />
            <h1>Hello</h1>
            <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>increment</button>
            <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>decrement</button>
            <button onClick={() => dispatch({ type: ACTION.INIT })}>initialise</button>
            <button onClick={() => dispatch({ type: ACTION.DIX })}>rajoute 10</button>
            <button onClick={() => dispatch({ type: ACTION.CHANGE_COLOR })}>Change color</button>
            {state.count}
        </div>
    )
}

export default Test