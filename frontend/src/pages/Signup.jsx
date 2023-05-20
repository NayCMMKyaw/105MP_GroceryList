import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

function Signup() {

const[account, setAccount] = useState({
  username: '',
  email: '',
  password: '',
  rePassword: '',
});
//for error messages while validating
const[errors, setErrors] = useState({});
const[showErrors, setShowErrors] = useState(false);

//update values
const handleChange = e => {
  const target = e.currentTarget;
  setAccount({
    ...account,
    [target.name] : target.value
  });
}
//validate conditions
useEffect(() => {
  const{ username, email, password, rePassword } = account;
  const errors = {};

  if(username.trim().length > 30 ) {
    errors.username = "Username should only be 30 characters";
  }

  if(!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
  }

  if(password.length < 8 || 
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/\d/.test(password)) {
    errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
  }

  if(password !== rePassword) {
    errors.rePassword = "Passwords do not match";
  }

  setErrors(errors);
},[account]);

 
  const handleSubmit = e => {
    e.preventDefault();
    setShowErrors(true); //show error only on submission
    if (Object.keys(errors).length === 0) {
      console.log(account);
      // setAccount({
      //   username: '',
      //   email: '',
      //   password: '',
      //   password2: '',
      // });
      // setShowErrors(false);
    }else{
      console.log(errors);
    }
  }

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
        <Box component='form' onSubmit={handleSubmit} autoComplete='off'>
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Username'
            name='username'
            type='text'
            value={account.username}
          />
          {showErrors && errors.username && <Typography sx={{color: 'red'}}>{errors.username}</Typography>}
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Email'
            name='email'
            type='email'
            value={account.email}
          />
          {showErrors && errors.email && <Typography sx={{color: 'red'}}>{errors.email}</Typography>}
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Password'
            name='password'
            type='password'
            value={account.password}
          />
          {showErrors && errors.password && <Typography sx={{color: 'red'}}>{errors.password}</Typography>}
          <CssTextField 
            margin='normal'
            size='small'
            required
            fullWidth
            onChange={handleChange}
            label='Confirm Password'
            name='rePassword'
            type='password'
            value={account.rePassword}
          />
          {errors.rePassword && <Typography sx={{color: 'red'}}>{errors.rePassword}</Typography>}
          <MyButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2}}
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
    </Box>
  )
}

export default Signup