import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const [rows,setRows]=useState([]);
    var navigate=useNavigate()
    useEffect(()=>{
      axios.get('http://localhost:4000/movie').then((res)=>{
        console.log(res);
        setRows(res.data)
      })
},[])
function del_value(p){
  axios.delete('http://localhost:4000/removemovie/'+p).then((res)=>{
    alert('Data deleted');
    window.location.reload()
  }).catch((error)=>{
    console.log(error)
  })
}
function update_value(val){
  navigate('/add',{state:{val}})

    
}
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
          Movie name:{item.movieName}
        </Typography>
        <Typography variant="h5" component="div">
          {item.movieDescription}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.movieDirector}
        </Typography>
        {/* <Typography variant="body2">
              <a href={item.imdb_url} target="_blank">IMDB Link</a>
            </Typography> */}
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={()=>{
          update_value(item)
  }}>Update</Button>
        <Button variant="contained" size="small" onClick={()=>{
          del_value(item._id)
        }}>Delete</Button>
      </CardActions>
    </Card>
    ))}
    </>
  )
}
