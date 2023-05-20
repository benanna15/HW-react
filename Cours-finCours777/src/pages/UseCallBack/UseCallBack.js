import React, { useCallback, useState } from 'react'
import ButtonSpe from './ButtonSpe';

const UseCallBack = () => {
  const [count, setcount] = useState(0);

  const handleClickUCB = useCallback(() => {
    console.log("button clicked")
    setcount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <h1>Count: {count}</h1>
      <ButtonSpe handleClick={handleClickUCB} />
    </div>
  )
}

export default UseCallBack


  // const handleClickUCB =  useCallback(()=>{
  //   console.log("button clicked")
  //   setcount((prevCount)=> prevCount+1)
  // },[])
