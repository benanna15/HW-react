import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'


const Article = (props) => {

    let location = useLocation()
    console.log("props", props);
    console.log("Location", location?.pathname.slice(9));

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://promises-cb263f.appdrag.site/api/getAllApiID?id=${location?.pathname.slice(9)}`, {
        params: {
            "id" : location?.pathname.slice(9),
            "AD_PageNbr" : "1",
            "AD_PageSize" : "500"
          }
       
      }).then(function(response){
        console.log(response.data.Table[0]);
    
        setData(response.data.Table[0])
      });
    
    }, [])



  return (
    <div className='container'>
        <div className="row justify-content-center">
            {data &&
             <div className="col-10 bg-light shadow rounded-4 m-3 p-3">
                <div>{data?.id}</div> 
                <h1 className='text-center' >{data?.title}</h1> 
                <p className='p my-4' >{data?.article}</p> 
                <img src={data?.image} alt="" className='image-size' />
                <p>auteur : {data?.text} </p>
                </div>
            }
            
            
        </div>

   </div>
      /* <Link to ='/UseEffectCompo' className='text-lg-start fs-1'>Tous les articles</Link>
      <h1>{data?.title}</h1>
      <p>{data?.article}</p> 
       <img src={data?.image} alt="Project Image" className='image-size' />         
      <p>{data?.text}</p>   */
   
  )
}

export default Article
