import React from 'react';
import {
  Box,
  Container
} from '@mui/material'

//components
import Nav from './components/Nav'
import Photos from './components/Photos'

function App() {
  return (
    <Box component="main">
      <Nav />
      <Container maxWidth="xl" disableGutters>
        <Photos />
      </Container>

    </Box>
  );
}

export default App;
