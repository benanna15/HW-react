import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useTranslation } from "react-i18next"
import useDocumentTItle from '../../components/useCustoms/useDocumentTItle'
import { useSelector } from 'react-redux'
import { getPseudo  } from "../../redux/slices/auth.slice"

const Portfolio = () => {
  const [data, setData] = useState();
  const [dataSauv, setDataSauv] = useState();
  const { t } = useTranslation()

  const GETPSEUDO = useSelector(getPseudo)

  useDocumentTItle("portolio de elie sultan")
  useEffect(() => {
    fetchApi()
  }, []);

  const fetchApi = () => {
        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/getPortfolio', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function (response) {
      console.log(response.data.Table);
      setData(response.data.Table)
      setDataSauv(response.data.Table)
    });
  }

  const handleSort = (cb) => {
    console.log("handleSort active", cb)
    let dataFilter =  dataSauv?.filter((projet)=> projet.categorie === cb )
    setData(dataFilter)
  }

  const init = () => {
    setData(dataSauv)
  }

  return (
    <div className='container'>
      <h1>{t("Portfolio.title")}</h1>
      <h1>Bonjour {GETPSEUDO}</h1>
      <button className="btn btn-dark mx-2" onClick={()=>   handleSort("html")}>Html</button>
      <button className="btn btn-dark mx-2"  onClick={()=>  handleSort("js")}>javascript</button>
      <button className="btn btn-dark mx-2"  onClick={()=>  handleSort("react")}>React</button>
      <button className="btn btn-dark mx-2"  onClick={()=>  init()}>Init</button>
      { 
        data?.map((row)=>(

          <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
            <h2>{row.title}</h2>
            <p>{row.description}...</p>
            <figure className='text-center'>
              <img src={row.image} className='img-fluid' alt="" />
            </figure>
            
          </div>
         
        ))
      }
    </div>
  )
}

export default Portfolio
