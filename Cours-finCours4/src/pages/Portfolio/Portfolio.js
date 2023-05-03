import React, { useEffect, useState } from 'react'
import axios from "axios"

const Portfolio = () => {
  const [data, setData] = useState();
  useEffect(() => {
    
    console.log("mon composant est montE",process.env)


    axios.get('https://car-parts-99db31.appdrag.site/api/getAllProjects', {
    params: {
      "AD_PageNbr" : "1",
      "AD_PageSize" : "500"
    }
  }).then(function(response){
    console.log(response.data);
      setData(response.data.Table)
    });

  }, []);

  return (
    <div className='container'>
      <h1>Port-folio</h1>
      { 
        data?.map((row)=>(
          // je place mon link avec les backticks
        
          
          <div key={row.id} className='bg-white shadow-lg rounded m-auto mt-3 p-3  col-md-8 col-lg-6'>
            <h2>{row.Titre}</h2>
            <img src={row.Image} className='img-fluid shadow rounded' alt="" />
          {/*  <p>{row.description}...</p> */}
            <h4 className='mt-2'>{row.Titre_1}</h4>
               <p>{row.Texte1}</p>
               <h4>{row.Titre_text}</h4>
               <p>{row.Texte}</p>
            <figure className='text-center'>
              
            </figure>
            
          </div>
         
        ))
      }
    </div>
  )
}

export default Portfolio
