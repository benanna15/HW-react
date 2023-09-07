import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getVie, getDataBlog  } from "../../redux/slices/test.slice"

const FilsComposant = () => {

    const GETVIE = useSelector(getVie)
    const GET_DATA_BLOG = useSelector(getDataBlog)


  return (
    <div>
      <h5>fils composant</h5>
      <p>{GETVIE}</p>
      {
        GET_DATA_BLOG?.map((data)=> (
           
          <div key={data.id}  >{data.title} </div>
        ))
      }
    </div>
  )
}

export default FilsComposant
