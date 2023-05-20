import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography, CssBaseline, TextField, Button, Grid } from '@mui/material'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const formWrapper = {
  background: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.11)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
  borderRadius: '5px',
  padding: 4,
  width: { xs: '80%',sm: '60%', md: '40%'},
  margin: 2,
  };

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00b2ca',
    },
    '&:hover fieldset': {
      borderColor: '#1d4e89',
    },
  }
});

const MyButton = styled(Button)({
  backgroundColor: '#00b2ca',
  borderRadius: 20,
  fontFamily: 'Fira Sans',
  fontWeight: 500,
  fontSize: 16,
  '&:hover':{
    backgroundColor: '#1d4e89',
  }
});

const TermsStyle = {
  fontFamily: 'Fira Sans',
  fontWeight: 400,
  fontSize: 12,
  color: 'rgba(0, 0, 0, 0.5)',
}

const MyLink = styled(Link)({
  fontFamily: 'Fira Sans',
  fontWeight: 400,
  fontSize: 14,
  display: 'flex',
  flexDirection: 'row',
  color: 'rgba(0, 178, 202, 1)',
  padding: 0,
  marginLeft: 2,
})

function Login() {

const[account, setAccount] = useState({
  email: '',
  password: '',
})

  const handleChange = e => {
    const target = e.currentTarget;
    setAccount({
      ...account,
      [target.name] : target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
  }


  return (
    <Box sx={{ backgroundColor: 'rgba(255, 245, 237, 0.5)', height: '100vh' }}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
      >
      <Box sx={{ 
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        }}
      >
        <AddShoppingCartRoundedIcon sx={{ color: '#00b2ca'}}/>
        <Typography 
            variant='h6' 
            component='h1' 
            sx={{
                fontFamily: 'Fira Code',
                fontWeight: 700,
                fontSize: 22,
            }}>
            GoShop
        </Typography>
      </Box>
        <Typography
        variant='h6'
        sx={{
          fontFamily: 'Fira Sans',
          fontWeight: 600,
          fontSize: 25,
        }}>
          Welcome Back
        </Typography>
      <Box sx={formWrapper}>
        <Typography
        variant='h6'
        sx={{
          fontFamily: 'Fira Sans',
          fontWeight: 400,
          fontSize: 18,
        }}>
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Email'
            name='email'
            type='email'
          />
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Password'
            name='password'
            type='password'
          />
          <MyButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2}}
          >
            Login
          </MyButton>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item xs >
            <MyLink to='/home' variant="body2">
              <ArrowBackIosNewRoundedIcon  fontSize='small' sx={{color: '#00b2ca'}}/>Back to home
            </MyLink>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant='body2'  sx={TermsStyle}>Don't have an account?</Typography>
            <MyLink to='/signup' variant="body2">
              Sign up
            </MyLink>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={TermsStyle}>By signing in, you agree to our <span style={{ color: '#00b2ca'}}>Terms of Use</span> & <span style={{ color: '#00b2ca'}}>Privacy Policy</span>.</Typography>
      </Box>
    </Box>
  )
}

export default Login