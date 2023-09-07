import React from 'react'

const FilsComposant = ({savoirGP}) => {
    console.log(savoirGP);

  return (
    <div>
      <h5>Fils Composant</h5>
      <p> {savoirGP.vie} </p>
    </div>
  )
}

export default FilsComposant
