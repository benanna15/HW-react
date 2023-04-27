import React,{ useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const UseEffectcompo = () => {

    const [data, setData] = useState();

    useEffect(() => {

    console.log("la table est montée");

    axios.get('https://sabik-4c768e.appdrag.site/api/getHtmlCss', {
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
      <h1>hello useEffect</h1>
      {
        data?.map( (row)=>(
            <div key={row.id} className=' shadow-lg rounded m-3 p-3'>
           
               <h2>{row.title}</h2>
               <p>{row.text}</p>
          
            </div>
        ))
      }

    </div>
  )
}

export default UseEffectcompo

