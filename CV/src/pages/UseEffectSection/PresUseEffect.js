import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import intro from '../../assets/intro.png'

const PresUseEffect = () => {

    const code = `  
    useEffect(() => {
            // celui ci se declenche une seul fois lorsque le component est rendu
    }, []);

   
    useEffect(() => {
        // celui ci se declenche a chaque fois qu'une variable change
    }, [maVariable]);
    

    useEffect(() => {
        
        return () => console.log("démontage du component") // cette fonction se declenche lors du demontage de mon component
    }, []);
    `

    return (
        <>
            <NavbarOffCanva />
            <div className='background-image bckgd'>
     <img src={intro} alt="Accueil" className="img-fluid   " />
     </div>
            <div className="container mt-5">
              
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
                <h1>Presentation du useEffect</h1>
                <p>Le useEffect se déclenche lorsque le composant est rendu, une seule fois si les crochets sont vides, sinon il se déclenche quand la variable change.
                   <br /> Avec  return il se declenche lors du démontage du composant .</p>
            </div>
        </>
    )
}

export default PresUseEffect
