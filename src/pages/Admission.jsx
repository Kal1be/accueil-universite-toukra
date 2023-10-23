import React from 'react'
import { Link } from 'react-router-dom'

function Admission() {
  return (
    <div>
      <h2>Pour suivre vos differents admisions suivez ce lien et vous pourrez en savoir plus sur nos differents cours</h2>
      <Link to="/admission/suivre">Suivre l'admission</Link>
    </div>
  )
}

export default Admission
