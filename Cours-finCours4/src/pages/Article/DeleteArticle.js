import React, { useRef, useState} from 'react'
import axios from 'axios'

const DeleteArticle = () => {

    const inputRef = useRef(null)
    const [messageError, setMessageError] = useState(false);
    const [messageSucces, setMessageSucces,] = useState(false);


    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputRef.current.value);
        console.log(inputRef.current.style.backgroundColor = 'red');

        axios.get('https://promises-cb263f.appdrag.site/api/checkToken', {
  params: {
    "token" : localStorage.getItem("tokenBlog"),
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
if (response.data.Table.length >0 ){
  axios.get('https://promises-cb263f.appdrag.site/api/DeleteArticle', {
  params: {
    "id" : inputRef.current.value
  }
}).then(function(response){
  console.log(response.data);


  if (response.data.affectedRows > 0){
    setMessageSucces(true)
    setMessageError(false)
   
  }else{
    setMessageError(true)
    setMessageSucces(false)
  }
});
    }else{
    setMessageError(true)
    }
})
}
  return (
    <form onSubmit={handleSubmit}>
        <h1>Delete Article</h1>
        <label >
            ID of the article
            <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Envoyer</button>

        {messageError && <h1 className="text-danger">Rien n'a été supprimé</h1>}

        {messageSucces &&<h1 className="text-success">La suppression a fonctionné</h1>}
    </form>
   
  )
}

export default DeleteArticle
