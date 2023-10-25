import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deletecontacts } from '../JS/Actions/contact';
import { useNavigate } from 'react-router-dom';

export default function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/editcontact/${contact._id}`); 
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {contact.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {contact.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(deletecontacts(contact._id))}>
          Delete
        </Button>
        <Button size="small" onClick={handleEditClick}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
