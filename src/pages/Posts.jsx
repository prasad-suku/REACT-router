import React from 'react'
import { useParams,Link } from 'react-router-dom'

function Posts() {
    let{id,name}=useParams()
    console.log(id);
  return (
    <>
    <h2>Post :{id} </h2>
     <p>klf;djsl;fkasd</p>
     
    </>
  )
}

export default Posts