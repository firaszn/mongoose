import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updatecontact } from '../JS/Actions/contact';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contact, setContact] = useState({});   
 
  const handleUpdateContact = (e) => {
    e.preventDefault();
    dispatch(updatecontact(id, contact)); 
    navigate('/contact');
  };

  const handlechange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField id="outlined-basic" label="name" variant="outlined" name="name" value={contact.name || ''} onChange={handlechange} />
      <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={contact.email || ''} onChange={handlechange} />
      <TextField id="outlined-basic" label="phone" variant="outlined" name="phone" value={contact.phone || ''} onChange={handlechange} />
      <Button onClick={handleUpdateContact} variant="contained">
        Update
      </Button>
    </div>
  );
};

export default EditContact;
