import React, { useRef, useState } from 'react';
import axios from "axios"

function DeleteArticle() {
    const inputRef = useRef(null);
    const [messageError, setMessageError] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputRef.current.value);
        console.log(inputRef.current.style.backgroundColor = 'red');

        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/testToken', {
            params: {
                token: localStorage.getItem("tokenPorteFolio"),
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            if (response.data.Table.length > 0) {
                axios.get('https://crud-webschool-32dd1a.appdrag.site/api/deleteArticlePrep', {
                    params: {
                        "id": inputRef.current.value
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data.affectedRows > 0) {
                        setMessageSuccess(true)
                        setMessageError(false)
                    }else{
                        setMessageError(true)
                        setMessageSuccess(false)
                    }
                });
            }else{
                setMessageError(true)
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Delete Article</h1>
            <label>
                Id of the article :
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Envoyer</button>
            {messageError && <h1 className="text-danger">Rien n'a ete supprimer</h1>   }
            {messageSuccess && <h1 className="text-success">La suppression a fonctionne</h1>   }
        </form>
    );
}

export default DeleteArticle