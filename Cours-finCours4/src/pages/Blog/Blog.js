import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom" // step 1 jimporte le link
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'

const Blog = () => {
  const [data, setData] = useState();
  const [activeFooter, setActiveFooter] = useState(false);

  useEffect(() => {
    
    console.log("mon composant est montE")

    axios.get('https://promises-cb263f.appdrag.site/api/getAllArticles', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function (response) {
      console.log(response.data.Table);
      setData(response.data.Table)
    });

  }, []);


  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }

  return (
    <>
      <NavbarOffCanva />
        <div className='container'>
          <h1>Section Blog</h1>
          {
            data?.map((row) => (
              // je place mon link avec les backticks
              <Link className='text-decoration-none text-dark' to={`/article/${row.id}`}>

                <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                  <img src={row.image} className='img-fluid image-size' alt="" />
                  <h2>{row.title}</h2>
                  <p>{row.article/* .slice(0, 100) */}...</p>
                  
                  <p>{row.auteur}</p>

                </div>
              </Link>
            ))
          }
          <Link to="/">
            <button className="btn btn-primary">retourner a la page initial</button>
          </Link>
        </div>


        <div>Hello blog</div>
        <button onClick={() => HandleFooter()} >active Footer</button>
    </>
  )
}

export default Blog
