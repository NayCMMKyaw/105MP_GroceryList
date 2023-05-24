import React, { useState, useEffect, useMemo, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Box, Typography, CssBaseline, TextField, Button, Grid } from '@mui/material'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Axios from '../components/axios_client';
import { AxiosError } from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import Login from './Login';
import SnackBarMessage from '../components/SnackBar';

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

function Signup() {
  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: '',
  });
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  const {status, setStatus} = useContext(GlobalContext);
  const navigate = useNavigate();


//update values
const handleChange = e => {
  const target = e.currentTarget;
  setAccount({
    ...account,
    [target.name] : target.value
  });
};
const{ username, email, password, rePassword } = account;

//validate conditions
const validateForm = () => {
  let isValid = true;
    // check user
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (username.trim().length > 30) {
      setUsernameError('Username should only be 30 characters');
      isValid = false;
    }
    // check email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }
    // check password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (!rePassword) {
      setRePasswordError('Confirm password is required');
    }
    if (password !== rePassword) {
      setPasswordError('Password is not match');
      setAccount((prevState) => ({
        ...prevState,
        password: '',
        rePassword: '',
      }));
      isValid = false;
    }

    return isValid;
}

  const handleSignup = async e => {
    e.preventDefault();
    if(!validateForm()) return;
    try{
      const response = await Axios.post('/signup',{
        username,
        email,
        password,
      });
      if(response.data.success) {
        setStatus({
          msg: response.data.message,
          severity: 'success',
        });
        navigate('/login');
      }
    } catch (e) {
      setAccount((prevState) => ({
        ...prevState,
        password: '',
        rePassword: '',
      }));
      if(e instanceof AxiosError) {
        if(e.response)
        return setStatus({
          msg:e.response.data.message,
          severity:'error',
        });
      }
      return setStatus({
        msg:e.message,
        severity:'error',
      });
    }
  };
  
  const generatekey = () => {
    return Math.random();
  };
  return (
    <Box sx={{ backgroundColor: 'rgba(255, 245, 237, 0.5)', height: '100%' }}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
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
      <Box sx={formWrapper}>
        <Typography
        variant='h6'
        sx={{
          fontFamily: 'Fira Sans',
          fontWeight: 400,
          fontSize: 18,
        }}>
          Sign up
        </Typography>
        <Box >
          <CssTextField 
            margin='normal'
            size='small'
            fullWidth
            onChange={handleChange}
            label='Username'
            name='username'
            type='text'
            value={username}
            error={usernameError !== ''}
            helperText={usernameError}
          />
          <CssTextField 
            margin='normal'
            size='small'
            fullWidth
            onChange={handleChange}
            label='Email'
            name='email'
            type='email'
            value={email}
            error={emailError !== ''}
            helperText={emailError}
          />
          <CssTextField 
            margin='normal'
            size='small'
            fullWidth
            onChange={handleChange}
            label='Password'
            name='password'
            type='password'
            value={password}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <CssTextField 
            margin='normal'
            size='small'
            fullWidth
            onChange={handleChange}
            label='Confirm Password'
            name='rePassword'
            type='password'
            value={rePassword}
            error={rePasswordError !== ''}
            helperText={rePasswordError}
          />
          <MyButton
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2}}
            onClick={handleSignup}
          >
            Sign up
          </MyButton>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item xs >
            <MyLink to='/home' variant="body2">
              <ArrowBackIosNewRoundedIcon fontSize='small' sx={{color: '#00b2ca'}}/>Back to home
            </MyLink>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant='body2'  sx={TermsStyle}>Already a user?</Typography>
            <MyLink to='/login' variant="body2">
              Login
            </MyLink>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={TermsStyle}>By signing in, you agree to our <span style={{ color: '#00b2ca'}}>Terms of Use</span> & <span style={{ color: '#00b2ca'}}>Privacy Policy</span>.</Typography>
      </Box>
      {status ? (
          <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
        ) : null}
    </Box>
  )
}

export default Signup