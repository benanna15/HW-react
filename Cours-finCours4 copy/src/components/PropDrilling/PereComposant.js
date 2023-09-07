import React from 'react'
import FilsComposant from './FilsComposant'

const PereComposant = ({savoirGP}) => {

console.log(savoirGP);
  return (
    <div>
      <h2>Pere Composant</h2>
      <FilsComposant savoirGP={savoirGP}/>
    </div>
  )
}

export default PereComposant
