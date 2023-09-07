import React, { useState } from 'react'
import PereComposant from './PereComposant';


const GrandPereC = () => {

  const [savoirGP, setSavoirGP] = useState({
    vie: "raconte ses exploits du passé"
  });

  const [catchValuePF, setCatchValuePF] = useState();
  
  return (
    <div>

      <h1>Grand Pere </h1>

      <PereComposant savoirGP={savoirGP}/>

    </div>
  )
}

export default GrandPereC
