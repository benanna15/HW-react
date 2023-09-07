import React, { useReducer } from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function reducer(state, action) {
  // ici c'est uniquement un switch case, en fonction de l'action.type qu'on lui envoi , il fait l'action contenu dans le return
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

function Counter() {
  // interet : au lieu de recharger le render constamment, on appel un simple fonction
  const [count, dispatch] = useReducer(reducer, 0); // en premiere argument je passe la fonction qui accumule, et en second je passe la valeur initail

  const code = `import React, { useReducer } from 'react';

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error();
    }
  }
  
  function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
  
    function handleIncrement() {
      dispatch({ type: 'increment' });
    }
  
    function handleDecrement() {
      dispatch({ type: 'decrement' });
    }
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
  }`

  function handleIncrement() {
    dispatch({ type: 'increment' }); // ici on lui passe l'action
  }

  function handleDecrement() {
    dispatch({ type: 'decrement' });
  }

  return (
    <div className='container'>

      <SyntaxHighlighter language="javascript" style={tomorrowNight}>
        {code}
      </SyntaxHighlighter>

      <p>Dans cet exemple, nous avons un composant Counter qui utilise useReducer pour gérer l'état d'un simple compteur. Nous avons défini une fonction de réduction reducer qui prend l'état actuel et une action en entrée et renvoie le nouvel état en fonction de l'action.</p>
      <p>L'état initial est 0, ce qui signifie que count est initialement égal à 0.</p>
      <p>Nous avons également défini deux fonctions handleIncrement et handleDecrement qui dispatchent des actions de type "increment" ou "decrement" respectivement.</p>
      <p>Lorsque nous utilisons dispatch pour envoyer une action à reducer, React appelle la fonction reducer avec l'état actuel et l'action. reducer renvoie alors le nouveau nombre count.</p>
      <p>Nous utilisons ensuite count pour afficher le nombre de compte et deux boutons pour incrémenter et décrémenter le compteur. Lorsque l'utilisateur clique sur un bouton, nous appelons handleIncrement ou handleDecrement qui dispatche l'action correspondante.</p>
      <p>En utilisant useReducer, nous avons pu gérer l'état de notre compteur de manière déclarative et réutilisable, en utilisant des actions claires pour modifier l'état.</p>

      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter