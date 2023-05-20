import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UseRefSection = () => {
    const code = `
    function DeleteArticle() {
        const inputRef = useRef(null);
    
        function handleSubmit(event) {
            event.preventDefault();
            console.log(inputRef.current.value);
            console.log(inputRef.current.style.backgroundColor = 'red');
        }
    
        return (
            <form onSubmit={handleSubmit}>
                <h1>Delete Article</h1>
                <label>
                    Id of the article :
                    <input type="text" ref={inputRef} />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        );
    }
    `;

  return (
    <div className='container'>
        <h1>UseRef</h1>

        <p> useRef est un outil très utile pour accéder aux éléments du DOM et stocker des valeurs qui persistent entre les rendus. Il peut également aider à optimiser les performances en évitant de déclencher des rendus inutiles.</p>
        <SyntaxHighlighter  language="javascript" style={tomorrowNight}>
            {code}
        </SyntaxHighlighter>
        <p>Dans notre exemple , nous recuperons la Ref et nous pouvons remarquer que le component ne se recharge pas autant que dans la methode Onchange</p>
    </div>
  )
}

export default UseRefSection
