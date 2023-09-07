import React, { useState } from 'react'

const FilterSearch = () => {
    const [utilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "devloppeuse" },
        { id: 2, nom: 'Bob', metier: "camionneur" },
        { id: 3, nom: 'Charlie', metier: "agent de securite" },
        { id: 4, nom: 'David', metier: "animateur" },
        { id: 5, nom: 'Eve', metier: "formateur" },
        { id: 6, nom: 'Eva', metier: "cuisto" }
    ]);
    const [valueInput, setValueInput] = useState('');
    const [resultat, setResultat] = useState([]);

    const handleInputChange = (e) => {
        console.log("fonction ouverte")
        const valueRecherche = e.target.value
        console.log("valueRecherche", valueRecherche)
        setValueInput(valueRecherche)

        const resultFilter = utilisateurs.filter(user =>  user.nom.toLocaleLowerCase().includes(valueRecherche.toLocaleLowerCase()) )
        console.log("resultFilter", resultFilter)
        setResultat(resultFilter)

    }

    return (
        <div>
            <input type="text" value={valueInput} onChange={handleInputChange} />
            {resultat.length > 0 ?
                (
                    <div>
                        <h6>Resultat de la recherche</h6>
                        <div>
                            {
                                resultat.map(user => (
                                    <div key={user.id}>
                                        Nom : {user.nom}
                                        <br />
                                        Metier : {user.metier}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
                :
                (
                    <div>Aucun resultat a votre requete</div>
                )
            }
        </div>
    )
}

export default FilterSearch
