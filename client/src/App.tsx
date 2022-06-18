import React from 'react';
import {
  Box,
  Container
} from '@mui/material'

//components
import Nav from './components/Nav'
import Photos from './components/Photos'
import TopButton from './components/TopButton'

function App() {
  return (
    <Box component="main">
      <Nav />
      <Container maxWidth="xl" disableGutters>
        <Photos />
      </Container>
      <TopButton />
    </Box>
  );
}

export default App;
