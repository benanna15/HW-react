import React from 'react'


const ButtonSpe = ({handleClick}) => {
  console.log("render buttonn ")
  return (
    <button className='bg-success' onClick={()=>handleClick()}>
      Click pour test
    </button>
  )
}

export default React.memo(ButtonSpe)










