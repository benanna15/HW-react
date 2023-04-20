import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

      document.title =`le compteur est à ${counter}`

    },[counter]);

    const Increment = () => {
      setCounter(counter +1)
    }

    const Decrement = () => {
        setCounter(counter -1)
      }

      const Reset = () => {
        setCounter(0)
      }

  return (
    <div className='counter-page'>
        <div className='counter'>{counter}</div>
      <button className='Button-counter' onClick={()=> Increment()} >Increment +</button>
      <button className='Button-counter' onClick={()=> Decrement()}>Decrement -</button>
      <button className='Button-counter' onClick={()=> Reset()}>Reset</button>
    </div>
  )
}

export default Counter
