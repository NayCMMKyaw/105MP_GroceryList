import { Checkbox, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Edit } from '@mui/icons-material';

const listWrapper = {
  display: 'flex', 
  ml: 6,  
  alignItems: 'center',
  width: {xs:"90vw", sm: '80%'},
  margin: { xs:'0', sm: 'auto'},
}


function ItemList({ item, setState, state }) {

const handleCheck =(e)=>{
  if(e.target.checked){

  }
}

  return (
    
    <Box sx={listWrapper}>
        <Checkbox  sx={{color:'#00b2ca'}}/>
        <Typography 
        variant='body1' 
        component='p'
        >
          {item.name}
        </Typography>
        <Box sx={{ flexGrow: 1}}></Box>
        
        {/* implement logic to change icons in update mode */}
        <Box sx={{ display: 'flex', gap: '10px', mt: '5px',}}>
            <EditOutlinedIcon onClick={Edit} sx={{color: '#1d4e89'}}/>
            <DeleteOutlinedIcon sx={{color: '#1d4e89'}}/>
        </Box>

    </Box>
  )
}

export default ItemList