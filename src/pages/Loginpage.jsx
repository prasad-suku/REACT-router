import React from 'react'
import { useNavigate } from 'react-router-dom'

function Loginpage() {
   let navigate = useNavigate()

   function onSumbited(){
    // e.preventDefault()
    navigate('/post/Arun')

   }

  return (
    <>
    <div>Loginpage</div>
 
 <form onSubmit={onSumbited}>
    <label htmlFor="email">
        <input type="text" /><br />
        <label htmlFor=""></label>
        <input type="password" /><br />
        <button type='sumbit'>sumbit</button>
    </label>
    </form>
    </>
  )
}

export default Loginpage