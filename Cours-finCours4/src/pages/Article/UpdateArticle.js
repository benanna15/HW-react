import React, { useState, useEffect } from 'react'
import axios from "axios"

const UpdateArticle = () => {

const [error, setError] = useState(false);
const [messageSucces, setMessageSucces] = useState(false);
const [form, setForm] = useState({
    id: "",
    title: "",
    article : "",
    auteur: ""

})
 useEffect(() => {
  console.log("form",form);
 },[form]); 

const handleSubmit=(e) => {
 e.preventDefault()

  axios.get('https://promises-cb263f.appdrag.site/api/checkToken', {
  params: {
    "token" : localStorage.getItem("tokenBlog"),
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
if (response.data.Table.length >0 ){
  axios.get('https://promises-cb263f.appdrag.site/api/UpdateArticle', {
  params: {
    "title" : form.title,
    "auteur" : form.auteur,
    "article" : form.article,
    "id" : form.id
  }
}).then(function(response){
  console.log(response.data);
    setMessageSucces(true)
    setError(false)
    setForm({ id: "",title: "",article : "",auteur: ""})
  })
  }else{
    setError(true)
    setMessageSucces(false)
  }
});

}

  return (
   <div className='container '>
        <h2>Update Article</h2>
        <form onSubmit={handleSubmit} className="row justify-content-center align-items-center ">
          
              <div>
              <label htmlFor="">ID : </label>
              <input type="text" value={form.id} onChange={(e)=> setForm((prevState)=>({...prevState, id : e.target.value }))} />
              </div>


              <div>
              <label htmlFor="">Title : </label>
              <input type="text" value={form.title} onChange={(e)=> setForm((prevState)=>({...prevState, title : e.target.value }))} />
              </div>


              <div>
              <label htmlFor="">Article : </label>
              <input type="text" value={form.article} onChange={(e)=> setForm((prevState)=>({...prevState, article : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Auteur : </label>
              <input type="text" value={form.auteur} onChange={(e)=> setForm((prevState)=>({...prevState, auteur : e.target.value }))} />
              </div>


            <button type="submit" className="btn btn-primary">Validez pour ajouter un article</button>

          {messageSucces &&<h1 className="text-success">Bravo un article a été modifié dans le portfolio</h1>}

       
          
          {error &&<h1 className="text-danger">Mauvaise authentification, ajout impossible</h1>}

        </form>
    </div>
    )
     
}

export default UpdateArticle



