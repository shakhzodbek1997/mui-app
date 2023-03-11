import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import React, { useState } from 'react';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',  // if small than 600 this code will work
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{ // up("sm")<- 600  mens that: small or bigger than sm
    display: "flex"
   }
}));


const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{ // up("sm")<- 600  mens that: small or bigger than sm
    display: "none"
  },
}));

const Navbar = () => {

  const [open, setOpen ] = useState(false)


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography 
          variant='h6' 
          sx={{
            display:{
              xs:"none",
              sm:"block"
            }
          }}
        >MUI__APP</Typography>
        
        <WidgetsIcon 
        sx={{
          display:{
            xs:"block",
            sm:"none"
          }
        }}
        />

        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>

          <Avatar 
            alt="Cindy Baker" 
            src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`} 
            sx={{
              width: 30,
              height: 30
            }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar 
            alt="Cindy Baker" 
            src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`} 
            sx={{
              width: 30,
              height: 30
            }}
          />
          <Typography variant='sapn'>King</Typography>
        </UserBox>

      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertica: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem> Profile </MenuItem>      
        <MenuItem> My Account </MenuItem>      
        <MenuItem> Log Out </MenuItem>      
      </Menu>
    </AppBar>
  )
}

export default Navbar;