import React, { useContext } from 'react'
import { Box, Button, CssBaseline, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const headingStyle = {
    fontFamily: 'Fira Sans',
    fontWeight: '600',
    fontSize: '25px',
    mt: 5,
    mb: {sm: 2},
  };
  const textStyle = {
    fontFamily: 'Fira Sans',
    fontWeight: 400,
    fontSize: { xs: '15px', md: '20px' },
    width: { xs: '80%', sm: '50%', md: '40%'},
  };
  const MyButton = {
    backgroundColor: '#00b2ca',
    borderRadius: 20,
    fontFamily: 'Fira Sans',
    fontWeight: 500,
    fontSize: 16,
    '&:hover':{
      backgroundColor: '#1d4e89',
    },
    marginTop: '1rem',
    width: { xs: '80%', sm: '50%', md: '40%'}
  }

function Entry() {
  const {user} = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(user);
  return (
    <Box>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { sm: 'center'},
        alignItems: 'center',
        mt: 2,
        p: 2,
      }}>
        <Typography 
          variant='h6'
          component='h1'
          sx={headingStyle}>
            Welcome, {user.username}!
        </Typography>
        <Typography 
          variant='body1' 
          component='p' 
          sx={textStyle}>
            You can now create your own shopping list and manage items.
        </Typography>
        <Button 
          variant='contained' 
          disableElevation 
          sx={MyButton}
          onClick={()=>navigate('/mylist')}>
            Let's start 
        </Button>
      </Box>
        
    </Box>
  )
}

export default Entry