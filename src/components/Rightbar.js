import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box
      flex={2} 
      p={2}
    >
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
        <Avatar 
          alt="John Doe" 
          src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg`} 
          sx={{
            width: 30,
            height: 30
          }}
        />
        </AvatarGroup>
      </Box> 
    </Box>
  )
}

export default Rightbar