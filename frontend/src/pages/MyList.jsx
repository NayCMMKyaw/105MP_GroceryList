import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box, TextField, Button, CssBaseline } from '@mui/material'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ItemList from '../components/ItemList';
import Nav from '../components/Nav';

const MyButton = styled(Button)({
  backgroundColor: '#00b2ca',
  borderRadius: 20,
  fontFamily: 'Fira Sans',
  fontWeight: 500,
  fontSize: 16,
  '&:hover':{
    backgroundColor: '#1d4e89',
  },
  '&:disabled': {
    backgroundColor: 'rgba(0, 178, 202, 0.45)',
    color: '#fff',
  },
});

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

const wrapperStyle = {
  textAlign: { sm:'center' },
  boxShadow: { sm: '0 4px 4px rgba(0,0,0,0.12)'},
  width: { sm: '70%', md:'639px'},
  margin: { sm: 'auto'},
  padding: 2,
}
const headingStyle = {
  fontFamily: 'Fira Sans',
  fontWeight: '600',
  fontSize: '25px',
  mt: 5,
  mb: {sm: 2},
  };

function MyList() {

  const [toBuy, setToBuy ] = useState([]);
//state for input validation
  const [toBuyInput, setToBuyInput] = useState("");
  const [toBuyError, setToBuyError] = useState(true);

//when textfield is touched/filled
  const handleInput = e => {
    setToBuyInput(e.target.value);
    if(e.target.value === null || e.target.value === ''){
      setToBuyError(true);
    }else {
      setToBuyError(false);
    }
  }
//when Additem button is clicked
  const handleAdd = () => {
    setToBuy([...toBuy, toBuyInput]); //put data into tobuy
    setToBuyInput('');  //set the textfield blank again
    setToBuyError(true);
  }

  return (
    <div>
      <CssBaseline />
      <Nav />
        <Box sx={wrapperStyle}>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            }}>
            <Typography 
              variant='h6'
              component='h1'
              sx={headingStyle}
            >
              My Shopping List
            </Typography>
            <CssTextField 
              size='small' 
              margin='normal'
              color='primary'
              sx={{ 
                width: {xs:"90vw", sm: '80%'},
                margin: { sm: 'auto'},
              }}
              onChange={handleInput}
              value={toBuyInput}
            />
            <Box sx={{ 
              display:'flex', 
              justifyContent:'flex-end', 
              alignItems: 'flex-end',
              marginRight: { xs: '3.5%', sm: '9%'},
              mt: 1,
              }}>
              <MyButton 
                variant='contained' 
                sx={{ m: 1}} 
                startIcon={<AddRoundedIcon/>} 
                onClick={handleAdd}
                disabled={toBuyError}
              >
              Add Item
              </MyButton>
            </Box>  
          </Box>
          {/* Render ToBuy into ItemList */}
          {toBuy.map((item, index)=>{
            return(
              <ItemList 
                toBuy={item}
                key={index}
                setState={setToBuy}
                state={toBuy}
              />
            )
          })}
        </Box>
      
      
    </div>
  )
}

export default MyList