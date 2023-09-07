import { useState, useEffect } from 'react';

function useWindowSize() {
  // Initialiser la state avec les valeurs undefined pour ne pas avoir de problème côté serveur
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler à appeler dès que la taille de la fenêtre change
    function handleResize() {
      // Mettre à jour la taille de la fenêtre dans la state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log("windowSize",  window.innerWidth, window.innerHeight,)
    }
    
    // Ajouter un écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);
    
    // Appeler le handler immédiatement pour qu'il puisse initialiser la taille
    handleResize();
    
    // Supprimer l'écouteur d'événement lorsque le composant est démonté
    return () => window.removeEventListener("resize", handleResize);
  }, []); // tableau de dépendance vide pour que l'effet ne se déclenche qu'une seule fois

  return windowSize;
}

export default useWindowSize