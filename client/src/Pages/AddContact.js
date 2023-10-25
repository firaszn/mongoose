import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcontacts } from '../JS/Actions/contact'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [contact,setContact]=useState({})
  const handlechange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})

  }
  const handleaddcontact=(e)=>{e.preventDefault()
  dispatch(addcontacts(contact))
  navigate('/contact')
  }
 
  return (
    <div style={{display :'flex',flexDirection:'column'}}>
<TextField id="outlined-basic" label="name" variant="outlined"  name="name" onChange={handlechange}/>
<TextField id="outlined-basic" label="email" variant="outlined" name="email" onChange={handlechange}/>
<TextField id="outlined-basic" label="phone" variant="outlined" name="phone" onChange={handlechange}/>

<Button onClick={handleaddcontact} variant="contained">Add</Button>

  
    </div>
  )
}

export default AddContact