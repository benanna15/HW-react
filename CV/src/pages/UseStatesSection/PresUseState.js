import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import intro from '../../assets/intro.png'
const PresUseState = () => {
 const handleClick =(cb)=>{
  navigator.clipboard.writeText(cb)  
}
  return (
    <>
      <NavbarOffCanva />
      <div className='background-image bckgd'>
     <img src={intro} alt="Accueil" className="img-fluid   " />
     </div>
      <div className="container mt-5 pt-5">
     
        <div className="bg-dark text-light p-5 rounded-4 mt-5" onClick={()=>handleClick('const [state, setState] = useState("")' )}n>
          <p>const [state, setState] = useState("")</p>
        </div>
        <h1 className='mt-5'>Presentation du UseState</h1>
        <p>useState permet de gerer et changer l'état d une variable en utilisant en utilisnt le setter, qui par convention commence en majuscule. </p>
 
      </div>
      
    </>
  )
}

export default PresUseState
