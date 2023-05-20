import { Box, Dialog, DialogTitle, Button, DialogActions } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const modalWrapper = {
  background: 'rgba(255, 255, 255, 0.98)',
  border: '1px solid rgba(0, 0, 0, 0.11)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
}

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

  

function Logout({open, setOpen}) {

const handleClose = () => setOpen(false);
const navigate = useNavigate();

  return (
    <Box>
        <Dialog
            sx={modalWrapper}
            open={open}
            onClose={handleClose}
            aria-labelledby='logout-dialog-title'
            aira-describedby='logout-dialog-description' 
            PaperProps={{ sx: { width: "50%", height: "50%" } }}
        >
            <DialogTitle id='logout-dialog-title'>
                {'Are you sure you want to log out?'}
            </DialogTitle>
            <DialogActions>
                <MyButton onClick={handleClose}>Cancel</MyButton>
                <MyButton onClick={() => navigate('/landing')} autoFocus>Logout</MyButton>
            </DialogActions>
        </Dialog>

    </Box>
  )
}

export default Logout