import React, { useState, useEffect } from 'react'
import axios from "axios"
const AddPortfolio = () => {

const [stateForm, setStateForm] = useState({
  title : "",
  title1: "",
  article1 : "",
  title2 : "",
  article2: ""

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
    axios.get('https://car-parts-99db31.appdrag.site/api/AddPortfolio', {
  params: {
    "Titre" : stateForm.title,
    "Titre_1" : stateForm.title1,
    "Texte1" : stateForm.article1,
    "Titre_text" : stateForm.title2,
    "Texte" : stateForm.article2
  }
}).then(function(response){
  console.log(response.data);
  if (response.data.affectedRows > 0){
    setMessageSucces(true)
    setMessageError(false)
    setStateForm({title : "",
    title1: "",
    article1 : "",
    title2 : "",
    article2: ""})
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
              <label htmlFor="">Title</label>
              <input type="text" value={stateForm.title} onChange={(e)=> setStateForm((prevState)=>({...prevState, title : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Title 1</label>
              <input type="text" value={stateForm.title1} onChange={(e)=> setStateForm((prevState)=>({...prevState, title1 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Article 1</label>
              <input type="text" value={stateForm.article1} onChange={(e)=> setStateForm((prevState)=>({...prevState, article1 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Titre 2</label>
              <input type="text" value={stateForm.title2} onChange={(e)=> setStateForm((prevState)=>({...prevState, title2 : e.target.value }))} />
              </div>

              <div>
              <label htmlFor="">Article 2</label>
              <input type="text" value={stateForm.article2} onChange={(e)=> setStateForm((prevState)=>({...prevState, article2 : e.target.value }))} />
              </div>

            <button type="submit" onClick={()=>handleSubmit()} className="btn btn-primary">Validez pour ajouter un article</button>

          {messageSucces &&
          <h1 className="text-success">Bravo un article a été ajouté dans le portfolio</h1>
          }

          {messageError &&
          <h1 className="text-danger">Oups l'article n'est pas ajouté dans le portfolio</h1>
          }
          
          {badAuth &&
          <h1 className="text-danger">Mauvaise authentification</h1>
          }

        </div>
      </div>
    
    </div>
  )
}

export default AddPortfolio
