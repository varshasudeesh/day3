import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const Add = ({person}) => {
    const [form,setForm]=useState({
      movieName:'',
      movieDescription:'',
      movieImage:'',
      movieDirector:''
        
      })
      const location=useLocation()
      function valueAdd(){
        if (location.state!=null) {
          axios.put('http://localhost:4000/movieedit/'+location.state.val._id,form).then((res)=>{
            alert('Data updated')
            
          }).catch((error)=>{
            console.log(error);
          })
          
        } else {
          //console.log(form)
        axios.post('http://localhost:4000/addmovie',form).then((res)=>{
          // console.log(req.data);
          // setRows(req.data);
          alert('Data added')

        }).catch((error)=>{
          console.log(error)
        })
          
        }
        
       }
      function valueCap(e){
        //console.log(e)
        setForm({...form,[e.target.name]:e.target.value})
      }
      useEffect(()=>{
        if(location.state!=null){
          setForm({...form,
            movieName:location.state.val.movieName,
            movieDescription:location.state.val.movieDescription,
            movieImage:location.state.val.movieImage,
            movieDirector:location.state.val.movieDirector
          })

        }

      },[])
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
        <div>
        <TextField
          
          id="outlined-required"
          label="Movie Name"
          variant="standard"
          name='movieName'
          value={form.movieName}
          onChange={valueCap}
          
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Movie description"
          variant="standard"
          name='movieDescription'
          value={form.movieDescription}
          onChange={valueCap}
          
        />
        </div>
         <div>
        <TextField
          id="outlined-password-input"
          label="Image"
          variant="standard"
          name='movieImage'
          value={form.movieImage}
          onChange={valueCap}
          
          
        />
        </div>  
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie director"
          variant="standard"
          name='movieDirector'
          value={form.movieDirector}
          onChange={valueCap}

          />
        </div>
        <div>
            <br></br>
        <Button variant='contained' onClick={valueAdd}>Submit</Button>
        <br></br>
       </div>
        </Box>
  );
}
