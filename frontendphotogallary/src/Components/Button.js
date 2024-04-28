import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

import  axios from 'axios';
function Button({setupdateUI}) {
    const handlechange=(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("photo",e.target.files[0])
        axios.post("http://localhost:5000/api/save",formdata)
        .then((res)=>{
            console.log(res.data);
            setupdateUI(res.data._id)
        })
        .catch((err)=>console.log(err))
    }
  return (
   
        <label htmlFor="file_picker"  className='button'>
        <FaCirclePlus />
        <input  hidden type="file" name='file_picker' id='file_picker' onChange={(e)=>handlechange(e)}/>
        </label>
     
   
  )
}

export default Button
