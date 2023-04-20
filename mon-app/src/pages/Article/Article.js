import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'


const Article = (props) => {

    let Location = useLocation()
    console.log("props", props);
    console.log("Location", Location?.pathname.slice(9));

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://promises-cb263f.appdrag.site/api/getAllApiID?id=${Location?.pathname.slice(9)}`, {
       
      }).then(function(response){
        console.log(response.data.Table[0]);
    
        setData(response.data.Table[0])
      });
    
    }, [])



  return (
    <div className=' shadow-lg rounded m-3 p-3'>
      <Link to ='/UseEffectCompo' className='text-lg-start fs-1'>Tous les articles</Link>
      <h1>{data?.title}</h1>
      <img src={data?.image} alt="Project Image" className='image-size' />
      <p>{data?.article}</p>         
      <p>{data?.text}</p>  
    </div>
  )
}

export default Article
