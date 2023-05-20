import React, { useState } from 'react';

const UtilisateurRecherche = () => {
  const [utilisateurs, setUtilisateurs] = useState([
    { id: 1, nom: 'Alice', metier: "devloppeuse" },
    { id: 2, nom: 'Bob' , metier: "camionneur" },
    { id: 3, nom: 'Charlie' , metier: "agent de securite" },
    { id: 4, nom: 'David' , metier: "animateur" },
    { id: 5, nom: 'Eve' , metier: "formateur" },
    { id: 5, nom: 'Eva' , metier: "cuisto" }
  ]);
  const [idRecherche, setIdRecherche] = useState('');
  const [utilisateurTrouve, setUtilisateurTrouve] = useState(null);

  const handleInputChange = (e) => {
    setIdRecherche(e.target.value);
  };


  const rechercherUtilisateur = () => {
    const utilisateur = utilisateurs.find(user => user.id === parseInt(idRecherche));
    console.log("utilisateur",utilisateur)
    if (utilisateur) {
      setUtilisateurTrouve(utilisateur);
    } else {
      setUtilisateurTrouve(null);
    }
  };


  return (
    <div>
        {utilisateurs?.map((pers)=> (
            <div>
                {pers.nom}
                {pers.id}
            </div>
        ))}
      <input type="text" value={idRecherche} onChange={handleInputChange} />
      <button onClick={rechercherUtilisateur}>Rechercher par id</button>

      {utilisateurTrouve ? (
        <div>
          Utilisateur trouvé : {utilisateurTrouve.nom}
        </div>
      ) : (
        <div>
          Utilisateur non trouvé.
        </div>
      )}

    </div>
  );
};

export default UtilisateurRecherche;