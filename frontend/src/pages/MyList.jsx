import React, { useContext, useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box, TextField, Button, CssBaseline } from '@mui/material'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ItemList from '../components/ItemList';
import Nav from '../components/Nav';
import Axios from '../components/axios_client';
import { AxiosError } from 'axios';
import SnackBarMessage from '../components/SnackBar';
import { GlobalContext } from '../context/GlobalContext';

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
  const {status, setStatus, user} = useContext(GlobalContext);

//state for input validation
  const [toBuyInput, setToBuyInput] = useState("");

  // useEffect(() => {
  //   // Fetch the initial list from the backend when the component mounts
  //   fetchItems();
  // }, [user]);

  // const fetchItems = async () => {
  //   try {
  //     const response = await Axios.get('/items', {withCredentials: true});
  //     if (response.data.success) {
  //       setToBuy(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching items:', error);
  //   }
  // };

//when Additem button is clicked
  const handleAdd = async () => {
    if(!toBuyInput) return;
    try{
      const response = await Axios.post('/item', { item: toBuyInput});
      console.log(response);
      if(response.data.success) {
        setStatus({
          severity: 'success',
          msg: 'Created item successfully'
        });
        
        setToBuy((prev) => [...prev, response.data.data.name]);
        console.log(toBuy);
        setToBuyInput('');  //set the textfield blank again
      }
    } catch (error) {
      if( error instanceof AxiosError && error.response) {
        setStatus({
          severity: 'error',
          msg: error.response.data.error
        });
      }else {
        setStatus({
          severity: 'error',
          msg: error.message
        });
      }
    }
  }

  const generatekey = () => {
    return Math.random();
  };
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
              onChange={(e)=>setToBuyInput(e.target.value)}
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
        {status ? (
          <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
        ) : null}
      
    </div>
  )
}

export default MyList