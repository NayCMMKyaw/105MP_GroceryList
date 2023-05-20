import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Close, Menu } from '@mui/icons-material'
import { AppBar,Box,IconButton,ListItemText,Toolbar, Typography, Drawer, MenuList, Icon} from '@mui/material'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import '../Nav.css'
import Logout from './Logout'

const drawerWidth = 300;
const logoStyle = {
    display: 'flex',
    flexGrow: { xs: 1, sm: 0 },
    fontFamily: 'Fira Code',
    fontWeight: 700,
    fontSize: 25,
};

function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };

      const handleClickToggle = () => {
        setOpen((prevState) => !prevState);
      };

  return (
    <div>
        <nav position='static' style={{ backgroundColor:'white' }}>
        <Toolbar>
            <AddShoppingCartRoundedIcon sx={{ display: "flex", color: '#00b2ca'}}/>
            <Typography 
                variant='h6' 
                component='div' 
                sx={logoStyle}>
                GoShop
            </Typography>

            <Box 
                sx={{ 
                    flexGrow: 1,
                    display: { xs:'none', sm: 'block'},
                    ml: 2.5, mt: 0.5,
                }}
            >
                <NavLink to='/home'>Home</NavLink>
                
                {/* implement direct to login when user not loggedin */}
                <NavLink to='/mylist'>My List</NavLink>
            </Box>
            <Box 
                sx={{ 
                    display: { xs:'none', sm: 'block'},
                    mt:0.5,
                }}
            >
                <NavLink style={{ color: '#00b2ca' }} to='/login'>Login</NavLink>

                {/* Implement Logout when get user cookie */}

                {/* <NavLink 
                    style={{ color: '#00b2ca', textDecoration: 'none' }} 
                    onClick={handleClickToggle}
                >
                    Logout
                </NavLink>
                <Logout open={open} setOpen={setOpen}/> */}
            </Box>

            {/* hamburger menu & drawer */}
            <IconButton 
                edge='end' 
                sx = {{ display: { xs: 'flex', sm:'none'} }}
                onClick={handleDrawerToggle}
            >
                < Menu />
            </IconButton> 
            
        </Toolbar>
        </nav>
        <Drawer 
            open = {mobileOpen}
            onClose = {handleDrawerToggle}
            sx={{
                width: drawerWidth,
                display: { sm:'none' },
            }}
        >
            <div style={{
                width:drawerWidth,
                height: '100%',
                background: '#fff5ed',
                }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton onClick={handleDrawerToggle}>
                        <Close />
                    </IconButton>
                </Toolbar>
                <MenuList sx={{
                    marginLeft: '2rem',
                    fontFamily: 'Fira Sans',
                    fontWeight: '500' 
                    }}>
                    <NavLink to='/home'>
                        <ListItemText primary='Home' />
                    </NavLink>
                    
                    {/* implement direct to login when user not loggedin */}
                    <NavLink to='/mylist'>
                        <ListItemText primary='My List' />
                    </NavLink>

                    {/* Implement Logout when get user cookie */}
                    <NavLink style={{ color: '#00b2ca', textDecoration: 'none'  }}  onClick={handleClickToggle}>
                        <ListItemText primary='Logout' />
                    </NavLink>
                </MenuList>
            </div>
        </Drawer>
    </div>
  )
}

export default Nav