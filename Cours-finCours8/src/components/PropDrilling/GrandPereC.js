import React, {useState} from 'react'
import PereComposant from './PereComposant';


const GrandPereC = () => {

    const [savoirGP, setsavoirGP] = useState({
        vie : "raconte ses exploits du passe"
    });

    const [catchValuePF, setcatchValuePF] = useState("");

    const RevealName = (cb) => {
        setcatchValuePF(cb)
    }


  return (
    <div>
      <h1>Grand pere</h1>

      Mon petit fils s'appel ?  {catchValuePF}

      <PereComposant savoirGP={savoirGP} RevealName={RevealName} />
 
    </div>
  )
}

export default GrandPereC
