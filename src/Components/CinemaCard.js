import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CinemaCard({id, name, sub_region}) {

  // const deleteCinema = (id) => {
  //   return axios.delete(`https://62245c1c3af069a0f9b408a2.mockapi.io/hackathoncinemas/${id}`).then(response => console.log(response))
  //         }

  let deleteReq = () => {
    console.log("cinema is deleted")
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sub_region}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onclick={() => deleteReq}>
          Delete 
        </Button>
      </CardActions>
    </Card>
  );
}













