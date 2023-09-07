import React, {useState, useCallback} from 'react'
import ButtonExt from './ButtonExt';

const UseCb = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback( () => {
      console.log("button clicked")
      setCount((c)=> c+1)
    },[])

  return (
    <div>
      <h1>Count : {count}</h1>
      <ButtonExt handleClick={handleClick} />
    </div>
  )
}

export default UseCb
