import React,{ useEffect, useState } from 'react'
import axios from "axios"
import { Card } from 'react-bootstrap';


const PortfolioUseEffect = () => {

       const [data, setData] = useState();

    useEffect(() => {

        console.log("la table est montée");

    axios.get('https://car-parts-99db31.appdrag.site/api/getAllProjects', {
    params: {
      "AD_PageNbr" : "1",
      "AD_PageSize" : "500"
    }
  }).then(function(response){
    console.log(response.data.Table);
    console.log(response.data);
    setData(response.data.Table)
  });
   }, []);

  return (
    <div className='container'>
      
      {
        data?.map( (row)=>(
         
            <Card key={row.id} className="bg-white shadow rounded  mx-auto mt-3 mb-3 p-3 col-md-8 col-lg-6">
                <h1>{row.Titre}</h1>
               <img src={row.Image} alt="Project Image" className='img-fluid col-md-6 col-lg-4 mx-auto'/>
               
               <h4>{row.Titre_1}</h4>
               <p>{row.Texte1}</p>
               <h4>{row.Titre_text}</h4>
               <p>{row.Texte}</p>
              
            </Card>
        ))
      }

    </div>
  )
}

export default PortfolioUseEffect