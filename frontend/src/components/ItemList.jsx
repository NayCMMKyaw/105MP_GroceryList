import { Checkbox, TextField, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { GlobalContext } from '../context/GlobalContext';
import Axios from './axios_client';
import { AxiosError } from 'axios';

const listWrapper = {
  display: 'flex', 
  ml: 6,  
  alignItems: 'center',
  width: {xs:"90vw", sm: '80%'},
  margin: { xs:'0', sm: 'auto'},
}

const editTextbox = {
  border: '1px solid #00b2ca',
  boxShadow: "0px 4px 4px rgba(0, 178, 202, 0.19)",
  borderRadius: "5px",
}

function ItemList({ item, items, setItems =()=>{} }) {

  const [editMode, setEditMode] = useState(false);
  const [newItem, setNewItem] = useState(item);
  const [targetItem, setTargetItem] = useState(item);
  const { setStatus } = useContext(GlobalContext);
  
  const handleEditToggle = () => {
    setEditMode((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };
  //editItem
  const handleEdit = async () => {
    try{
      const response = await Axios.patch('/item', newItem);
      if(response.data.success){
        setStatus({
          severity: 'success',
            msg: 'Updated item successfully'
        });
        setItems((prev)=> prev.map((i) => (i.id===newItem.id ? response.data.data: i)));
        setEditMode(!editMode);
      }
    }
    catch(error){
      if ( error instanceof AxiosError && error.response) {
        setStatus({
          severity: 'error', 
          msg: error.response.data.error
        });
      }else {
        setStatus({
          severity: 'error',
          msg: error.message
        })
      }
    }
  }
//delete item
const handleDelete = async () => {
  try {
    setTargetItem(item);
    const response = await Axios.delete(`/item/${targetItem.id}`);
    if(response.data.success){
      setStatus({
        severity: 'success',
        msg: 'Deleted item successfully'
      });
      setItems(items && items.filter((i) => i.id !== targetItem.id));
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      setStatus({
        severity: 'error',
        msg: error.response.data.error
      });
    } else {
      setStatus ({
        severity: 'error',
        msg: error.message
      });
    }
  }
}
const handleCheck =(e)=>{
  if(e.target.checked){

  }
}

  return (
    
    <Box >
      {editMode ? (
        <Box sx={listWrapper}>
        <TextField 
        sx={editTextbox}
        type='text'
        name='name'
        value={newItem.name}
        size='small'
        fullWidth
        onChange={handleChange}
        />
        <Box sx={{ flexGrow: 1}}></Box>
      <Box sx={{ display: 'flex', gap: '10px', mt: '5px',}}>
          <DoneRoundedIcon onClick={handleEdit} sx={{color: '#1d4e89', cursor: 'pointer'}}/>
          <ClearRoundedIcon onClick={handleEditToggle} sx={{color: '#1d4e89', cursor: 'pointer'}}/>
      </Box>
      </Box>
      ) : (
        <Box sx={listWrapper}>
          <Checkbox  sx={{color:'#00b2ca'}}/>
          <Typography 
          variant='body1' 
          component='p'
          >
            {item.name}
          </Typography>
          <Box sx={{ flexGrow: 1}}></Box>
          <Box sx={{ display: 'flex', gap: '10px', mt: '5px',}}>
              <EditOutlinedIcon onClick={handleEditToggle} sx={{color: '#1d4e89', cursor: 'pointer'}}/>
              <DeleteOutlinedIcon onClick={handleDelete} sx={{color: '#1d4e89', cursor: 'pointer'}}/>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default ItemList