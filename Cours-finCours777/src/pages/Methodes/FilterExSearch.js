import React, { useState } from 'react';

const RechercheUtilisateurs = () => {
  const [utilisateurs, setUtilisateurs] = useState([
    { id: 1, nom: 'Alice', metier: "devloppeuse" },
    { id: 2, nom: 'Bob' , metier: "camionneur" },
    { id: 3, nom: 'Charlie' , metier: "agent de securite" },
    { id: 4, nom: 'David' , metier: "animateur" },
    { id: 5, nom: 'Eve' , metier: "formateur" },
    { id: 6, nom: 'Eva' , metier: "cuisto" }
  ]);
  const [recherche, setRecherche] = useState('');
  const [resultats, setResultats] = useState([]);

  const handleInputChange = (e) => {
    const valeurRecherche = e.target.value;
    setRecherche(valeurRecherche);

    const resultatsFiltres = utilisateurs.filter(user => user.nom.toLowerCase().includes(valeurRecherche.toLowerCase()));
    setResultats(resultatsFiltres);
  };

  return (
    <div>
      <input type="text" value={recherche} onChange={handleInputChange} />

      {resultats.length > 0 ? (
        <div>
          Résultats de la recherche :
          <ul>
            {resultats.map(user => (
              <li key={user.id}>
                Nom: {user.nom}, Métier: {user.metier}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          Aucun résultat trouvé.
        </div>
      )}
    </div>
  );
};

export default RechercheUtilisateurs;