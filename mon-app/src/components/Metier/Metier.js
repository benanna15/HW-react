import React,{useState} from 'react'

const Metier = () => {
    const [state, setState] = useState({

        id:1,
        metier: "Fullstack Dev",
        Niveau: "en formation"

    });

    const handleClickJunior = () => {
      setState((prevstate)=> ({...prevstate, Niveau: "Junior"}))
    }
    const handleClickIntermediaire = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Intermediaire"}))
      }
    const handleClickSenior= () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Senior"}))
      }
  return (
    <div className='metier-page'>
      <h1 className='metier-text'>Je suis {state.metier} {" "} {state.Niveau} </h1>
      <button className='metier-1' onClick={() => handleClickJunior()}>Dans 3 mois je serai </button>
      <button className='metier-1'onClick={() => handleClickIntermediaire()}>Dans 1 an je serai </button>
      <button className='metier-1'onClick={() => handleClickSenior()}>Dans 5 ans je serai </button>
    </div>
  )
}

export default Metier
