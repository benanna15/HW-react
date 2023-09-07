import React, {useState, useEffect} from 'react'
import PereComposant from './PereComposant';
import { useDispatch } from 'react-redux';
import { setVie , setdataBlog} from "../../redux/slices/test.slice"
import useFetch from '../useCustoms/useFetch';

const GrandPereC = () => {

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch("https://crud-webschool-32dd1a.appdrag.site/api/getAllArticles")
    
  useEffect(() => {
    dispatch(setdataBlog(data))
  }, [data]);

const handclick = () => {
    console.log("open")
    dispatch(setVie("tais toi gamin"))
}

  return (
    <div>
      <h1>Grand pere</h1>

      Mon petit fils s'appel ?  
      <PereComposant  />

      <button onClick={()=> handclick()}>Grand pere parle</button>
 
    </div>
  )
}

export default GrandPereC
