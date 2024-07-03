import { Box, Button, TextField } from '@mui/material';
import React from 'react'

export const Add = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <div>
        <TextField
          
          id="outlined-required"
          label="Movie Name"
          variant="standard"
          
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Movie description"
          variant="standard"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Image"
          variant="standard"
          
          
          
        />
        </div> 
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie director"
          variant="standard"
          />
        </div>
        <div>
        <Button variant='contained'>Submit</Button>
        <br></br>
       </div>
        </Box>
  );
}
