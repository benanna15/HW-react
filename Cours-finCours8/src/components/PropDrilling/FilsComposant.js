import React, {useEffect} from 'react'

const FilsComposant = ({savoirGP  , RevealName}) => {
    console.log("FilsComposant",savoirGP)

    useEffect(() => {
        RevealName("Elie")
    }, []);

  return (
    <div>
      <h5>fils composant</h5>
      <p>{savoirGP.vie}</p>
    </div>
  )
}

export default FilsComposant
