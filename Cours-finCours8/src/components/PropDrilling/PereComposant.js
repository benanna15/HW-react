import React from 'react'
import FilsComposant from './FilsComposant'

const PereComposant = ({savoirGP, RevealName}) => {
    console.log("PereComposant", savoirGP)
  return (
    <div>
      <h2>pere composant</h2>
      <FilsComposant savoirGP={savoirGP} RevealName={RevealName} />
    </div>
  )
}

export default PereComposant
