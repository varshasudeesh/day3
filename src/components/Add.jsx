import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'

export const Add = ({person}) => {
    const [form,setForm]=useState({
        mname:person.mname,
        mdesc:person.mdesc,
        mdir:person.mdir,
        image:''
        
      })
      function valueAdd(){
        console.log(form)
       }
      function valueCap(e){
        //console.log(e)
        setForm({...form,[e.target.name]:e.target.value})
      }
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
          name='mname'
          value={form.mname}
          onChange={valueCap}
          
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Movie description"
          variant="standard"
          name='mdesc'
          value={form.mdesc}
          onChange={valueCap}
          
        />
        </div>
         <div>
        <TextField
          id="outlined-password-input"
          label="Image"
          variant="standard"
          name='image'
          value={form.image}
          onChange={valueCap}
          
          
        />
        </div>  
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie director"
          variant="standard"
          name='mdir'
          value={form.mdir}
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
