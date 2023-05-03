import React, { useState, useEffect } from 'react'
import axios from "axios"
const AddArticle = () => {

const [stateForm, setStateForm] = useState({
  title : "",
  article : "",
  auteur : ""

});

const [messageSucces, setMessageSucces] = useState(false);
const [messageError, setMessageError] = useState(false);
const [badAuth, setBadAuth] = useState(false);
/* useEffect(() => {
  console.log("stateForm",stateForm);
}, [stateForm]); */

const handleSubmit=() => {
  console.log("stateForm",stateForm);
console.log(localStorage.getItem("tokenBlog"));

  axios.get('https://promises-cb263f.appdrag.site/api/checkToken', {
  params: {
    "token" : localStorage.getItem("tokenBlog"),
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
if (response.data.Table.length >0 ){
    axios.get('https://promises-cb263f.appdrag.site/api/addArticle', {
  params: {
    "title" : stateForm.title,
    "auteur" : stateForm.article,
    "article" : stateForm.auteur
  }
}).then(function(response){
  console.log(response.data);
  if (response.data.affectedRows > 0){
    setMessageSucces(true)
    setMessageError(false)
    setStateForm({title: "",article : "",auteur: ""})
  }else{
    setMessageError(true)
    setMessageSucces(false)
  }
});
}else{
  setBadAuth(true)
}

})

}

  return (
    <div className='container'>
      <div className="row justify-content-center align-items-center "style={{height:"100vh"}}>
        <div className="col-8">
          
            <div>
              <label htmlFor="">title</label>
              <input type="text" value={stateForm.title} onChange={(e)=> setStateForm((prevState)=>({...prevState, title : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">article</label>
              <input type="text" value={stateForm.article} onChange={(e)=> setStateForm((prevState)=>({...prevState, article : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">auteur</label>
              <input type="text" value={stateForm.auteur} onChange={(e)=> setStateForm((prevState)=>({...prevState, auteur : e.target.value }))} />
              </div>

            <button type="submit" onClick={()=>handleSubmit()} className="btn btn-primary">Validez pour ajouter un article</button>

          {messageSucces &&
          <h1 className="text-success">Bravo un article a été ajouté</h1>
          }

          {messageError &&
          <h1 className="text-danger">Oups l'article n'est pas ajouté</h1>
          }
          
          {badAuth &&
          <h1 className="text-danger">Mauvaise authentification</h1>
          }

        </div>
      </div>
    
    </div>
  )
}

export default AddArticle
