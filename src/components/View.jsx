import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
export const View = () => {
    const rows=[{mName:'Movie1',mdesc:'Movie1',mdirector:'maniratnam'},{mName:'Movie2',mdesc:'Movie2',mdirector:'Tarantino'}]
  
    return (
    (rows.map((item)=>(
        
    <Card style={{marginTop:'7%'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Movie1
        </Typography>
        <Typography variant="h5" component="div">
          Mamma mia!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Musical/Comedy
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )))
    
  )
}
