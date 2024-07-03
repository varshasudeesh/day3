import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
export const View = () => {
    //const rows=[{mNo:'Movie1',mName:'Mamma mia!', mdesc:'Musical/Comedy',mdirector:'Phyllida LLoyd'},{mNo:'Movie2',mName:'Get Out',mdesc:'Horror/Comedy',mdirector:'Jordan Peele'}]
    const [rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('https://dummyapi.online/api/movies').then((res)=>{
        
        setRows(res.data)
      })
},[])
    return (
        <>
    {rows.map((item)=> (
        
    <Card key={item.id} style={{marginTop:'7%'}} sx={{ minWidth: 275 }}>
       
        {/* <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.movie}
          /> */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Movie id:{item.id}
        </Typography>
        <Typography variant="h5" component="div">
          {item.movie}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rating:{item.rating}
        </Typography>
        <Typography variant="body2">
              <a href={item.imdb_url} target="_blank">IMDB Link</a>
            </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))}
    </>
  )
}
