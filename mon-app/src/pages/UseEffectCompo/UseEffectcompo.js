import React,{ useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const UseEffectcompo = () => {

    const [data, setData] = useState();

    useEffect(() => {

    console.log("la table est montée");

    axios.get('https://promises-cb263f.appdrag.site/api/getAllArticles', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table);
  setData(response.data.Table)
});
    }, []);

  return (
    <div className='container'>
      <h1>hello useEffect</h1>
      {
        data?.map( (row)=>(
            <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
              <img src={row.image} alt="Project Image" className='image-size' />
               <h2>{row.title}</h2>
               <p>{row.article}</p>
               <p>{row.text}</p>
               <button className='btn btn-danger' style={{ borderRadius: "50px"}}>alert</button>
               <button className='btn btn-info'>info</button>
               <button className='btn btn-success'>valide</button>
               <button className='btn btn-warning'>warning</button>
            </div>
        ))
      }
      <Link to="/">
      <button className="btn btn-primary"> Retourner à la page principale</button> 
      </Link>
    </div>
  )
}

export default UseEffectcompo
