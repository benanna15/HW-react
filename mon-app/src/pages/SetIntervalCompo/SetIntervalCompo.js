import React, { useState, useEffect} from 'react'

const SetIntervalCompo = () => {

const [time, setTime] = useState(0); 

useEffect(() => {

    const SetIntervalID = setInterval(() => {
        setTime((prevstate) => (prevstate + 1))
    },1000)          
  return ()=> clearInterval(SetIntervalID)
}, [])



  return (
    <div>
    <h1>Mon compteur tourne depuis : {time} </h1>  
    </div>
  )
}

export default SetIntervalCompo
