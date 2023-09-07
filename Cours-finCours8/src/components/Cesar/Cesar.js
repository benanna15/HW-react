import React, {useEffect, useState} from 'react'
import imgCesar from "../../assets/delon_cesar.jpg"

const Cesar = () => {
    const [nameofKing, setNameofKing] = useState("vide"); // une variable


    const [testArme, setTestArme] = useState(0);

    useEffect(() => { // ecouter letat du component
        console.log("moi cesar je suis monté")
        setNameofKing("Cesar")

        return () => {
            setNameofKing("")
            setTestArme("")
           alert("Cesar et son arme ont ete demonté") ; 
        } 

    }, []);

    useEffect(() => {
        console.log("mon arme a ete modifie")
    }, [testArme]);

    const handleClick = () => {
  
        setTestArme(prevState=> (prevState+1 ) )
    }
  return (
    <div className='container'>
      <h1>Cesar vous dit bonjour</h1>
      <img src={imgCesar} alt="cesar" />
      le nom du roi est  : {nameofKing}
      <p>j'ai une armee de {testArme} millier de soldat</p>
      <button className='btn btn-dark' onClick={()=> handleClick()}>ajouter des soldat a l'emperur</button>
    </div>
  )
}


export default Cesar
