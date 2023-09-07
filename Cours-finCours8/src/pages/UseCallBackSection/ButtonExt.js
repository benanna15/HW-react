import React from 'react'

const ButtonExt = ({handleClick}) => {
    console.log("render de mon button")
  return (
    <button onClick={()=> handleClick()} className=' btn btn-success'>
      click pour test
    </button>
  )
}

export default React.memo(ButtonExt)
