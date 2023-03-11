import React from 'react'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import Navbar from './components/Navbar'

function App() {
  return (
    <Box>
      {/* navbar */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App