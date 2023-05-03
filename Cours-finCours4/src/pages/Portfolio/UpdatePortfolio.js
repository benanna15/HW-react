import React, { useState, useEffect } from 'react'
import axios from "axios"

const UpdatePortfolio = () => {

const [error, setError] = useState(false);
const [messageSucces, setMessageSucces] = useState(false);
const [form, setForm] = useState({
    id: "",
    title: "",
    title1: "",
    article1 : "",
    title2 : "",
    article2: ""

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
    axios.get('https://car-parts-99db31.appdrag.site/api/UpdatePortfolio', {
  params: {
    "Titre" : form.title,
    "Titre_1" : form.title1,
    "Texte1" : form.article1,
    "Titre_text" : form.title2,
    "Texte" : form.article2,
    "id" : form.id
  }
}).then(function(response){
     console.log(response.data);
    setMessageSucces(true)
    setError(false)
    setForm({ id: "",title: "",title1: "",article1 : "",title2 : "",article2: ""})
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
              <label htmlFor="">Title 1 : </label>
              <input type="text" value={form.title1} onChange={(e)=> setForm((prevState)=>({...prevState, title1 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Article 1 : </label>
              <input type="text" value={form.article1} onChange={(e)=> setForm((prevState)=>({...prevState, article1 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Titre 2 : </label>
              <input type="text" value={form.title2} onChange={(e)=> setForm((prevState)=>({...prevState, title2 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Article 2 : </label>
              <input type="text" value={form.article2} onChange={(e)=> setForm((prevState)=>({...prevState, article2 : e.target.value }))} />
              </div>

            <button type="submit" className="btn btn-primary">Validez pour ajouter un article</button>

          {messageSucces &&<h1 className="text-success">Bravo un article a été modifié dans le portfolio</h1>}

       
          
          {error &&<h1 className="text-danger">Mauvaise authentification, ajout impossible</h1>}

        </form>
    </div>
    )
     
}

export default UpdatePortfolio
