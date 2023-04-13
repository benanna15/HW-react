import React, {useState} from 'react'

const Toogle = () => {

    const [toogle, setToogle] = useState(false);

    const ActivToogle= () => {
      setToogle(!toogle)
    }

  return (
    <div className='toggle-page'>
        Hello toogle

    

    { toogle === true &&
        <div className='toggle-text'>Coucou</div>
    }

        <button className="toggle-button" onClick={() => ActivToogle()}>Click ici</button>
        
    </div>
  )
}

export default Toogle
