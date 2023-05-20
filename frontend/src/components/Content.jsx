import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Button, CssBaseline, Container } from '@mui/material';

const Img = styled('img')({
  maxWidth: '75%',
  height: 'auto',
  margin: 'auto'
});

const headerTextStyle = {
  fontFamily: 'Fira Sans',
  fontWeight: 600,
  fontSize: { xs: '30px', sm: '40px', md: '58px' },
  marginBottom: '12px'
};
const textStyle = {
  fontFamily: 'Fira Sans',
  fontWeight: 400,
  fontSize: { xs: '15px', md: '20px' },
  width: '95%',
}
const MyButton = styled(Button)({
  backgroundColor: '#00b2ca',
  borderRadius: 20,
  fontFamily: 'Fira Sans',
  fontWeight: 500,
  fontSize: 16,
  '&:hover':{
    backgroundColor: '#1d4e89',
  },
  marginTop: '1rem',
  width: '90%'
});

function Content() {
    const navigate = useNavigate();

  return (
    <Box>
      <CssBaseline />
      <Box sx={{ mt: 4}}>
        <Grid 
          container 
          justifyContent='center'
          spacing={{ xs:5, sm:4, md: 2 }}
          padding={{ xs:2, sm:3, md: 4 }}
         >
          <Grid item xs={11} sm={6} >
            <Typography variant='h3' component='h1' sx={headerTextStyle}>Free Online Grocery List</Typography>
            <Typography variant='body1' component='p' sx={textStyle}>Manage your shopping list at one place, easy, convenient and time-saving.</Typography>
            <br />
            <MyButton 
              variant='contained'
              // fullWidth
              onClick={() => navigate('/signup')}
              >
                Sign up for FREE
            </MyButton>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent:'center'}}>
            <Img src="./assets/Group 3.svg" alt="webpic" />
          </Grid>
        </Grid>
      </Box> 
    </Box>
  )
}

export default Content