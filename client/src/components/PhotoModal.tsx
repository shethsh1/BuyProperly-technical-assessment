import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Zoom,
  Dialog,
  DialogContent
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

type props = {
  open: boolean,
  handleClose: () => void,
  title: string,
  description: string,
  family: string,
  collectiveNoun?: string,
  genus?: string,
  image: string
}

export default function PhotoDialog({
  handleClose,
  open,
  title,
  description,
  family,
  collectiveNoun,
  genus,
  image
}: props) {
  return (
    <Dialog
      TransitionComponent={Zoom}
      onClose={handleClose}
      maxWidth="lg"
      aria-labelledby="customized-dialog-title"
      open={open}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: 'relative'
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 5,
            right: 5,
            color: 'white',
            zIndex: 99,
            '&:hover': {
              backgroundColor: 'white',
              color: 'black'
            }
          }}
        >
          <CloseIcon
          />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            p: 1,
            color: '#fff',
            textAlign: 'center',
            width: '100%',
            '@media screen and (max-width: 400px)': {
              position: 'static'
            }
          }}
        >
          <Typography variant="h5">
            {title}
          </Typography>
        </Box>

        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%'
          }}
        >
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            p: 1,
            color: '#fff',
            textRendering: 'optimizeLegibility',
            '@media screen and (max-width: 700px)': {
              position: 'static'
            }
          }}
        >
          <Typography>
            Family: {family}
          </Typography>
          <Typography>
            {
              genus && <>Genus: {genus}</>
            }
            {
              collectiveNoun && <>CollectiveNoun: {collectiveNoun}</>
            }
          </Typography>
          <Typography>
            {description}
          </Typography>

        </Box>

      </DialogContent>

    </Dialog>

  );
}