import React, { useState, useEffect } from 'react';
import axios from "axios"

const AddArticle = () => {
    const [error, SetError] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);    
    const [form, setForm] = useState({   title: "", article: "",  auteur: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/testToken', {
            params: {
                token: localStorage.getItem("tokenPorteFolio"),
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            console.log(response.data.Table.length > 0);
            if (response.data.Table.length > 0) {
                axios.get('https://crud-webschool-32dd1a.appdrag.site/api/addArticlesPrep', {
                    params: {
                        title: form.title,
                        auteur: form.auteur,
                        articles: form.article
                    }
                }).then(function (response) {
                    console.log(response.data);
                    setMessageSuccess(true)
                    SetError(false)
                    setForm({
                        title: "",
                        article: "",
                        auteur: ""
                    })
                });
            }else{
                SetError(true)
                setMessageSuccess(false)
            }
        });
    };

    return (
        <div>
            <h2>Add Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">article:</label>
                    <input type="text" value={form.article} onChange={(e) => setForm((prevState) => ({ ...prevState, article: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="password">Auteur:</label>
                    <input type="text" value={form.auteur} onChange={(e) => setForm((prevState) => ({ ...prevState, auteur: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="password">title:</label>
                    <input  type="text"  id="title" value={form.title} onChange={(e) => setForm((prevState) => ({ ...prevState, title: e.target.value }))} />
                </div>
                <button type="submit">Envoyer le formulaire</button>
                {error && <h1 className='text-danger'> Mauvais token , aucun ajout possible </h1> }
                {messageSuccess && <h1 className="text text-success">Votre article a ete ajouter avec Succes</h1> }
            </form>
        </div>
    );
};

export default AddArticle;

// useEffect(() => {
//     console.log("form", form)
// }, [form]);
