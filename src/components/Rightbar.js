import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      flex={2} 
      p={2}
      sx={{
        display: {xs: 'none', sm: 'block'}
      }}
    >
      <Box position="fixed" width={300} >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar 
            alt="Remy Sharp" 
            src={``} 
          />
          <Avatar 
            alt="Travis Howard" 
            src={`https://material-ui.com/static/images/avatar/2.jpg`} 
          />
          <Avatar 
            alt="Cindy Baker" 
            src={`https://material-ui.com/static/images/avatar/3.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/4.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/5.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/6.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/8.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/9.jpg`} 
          />
          <Avatar 
            alt="Remy Sharp" 
            src={`https://material-ui.com/static/images/avatar/10.jpg`} 
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg' alt="Nature" />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg' alt="Nature" />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg' alt="Nature" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations   
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3757032/pexels-photo-3757032.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3306008/pexels-photo-3306008.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box> 
    </Box>
  )
}

export default Rightbar