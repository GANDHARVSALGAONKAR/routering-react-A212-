import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Contact() {
 const[searchParams,setSearchParams]=useSearchParams()
  return (
    <div>
      {/* http://localhost:5173/contact?name=ABC&phoneno=11221 */}
      <p>Name:{searchParams.get("name")}</p>
      <p>Phoneno:{searchParams.get("phoneno")}</p>
      
      <button className='btn btn-primary m-3' onClick={()=>setSearchParams({email:'noneed@gmail.com'})} >SET SEACRH PARAMETER</button>
    </div>
  )
}

export default Contact