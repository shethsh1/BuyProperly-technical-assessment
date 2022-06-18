import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grow
} from '@mui/material'

//components
import PhotoModal from './PhotoModal'
//constants
import { GRID_GAP } from '../constants'

type props = {
  title: string,
  description: string,
  family: string,
  collectiveNoun?: string,
  genus?: string,
  width: number,
  height: number,
  imageUrl: {
    FullSize: string,
    Thumb: string
  },
  timeout: number
}

export default function Photo({
  title,
  description,
  family,
  collectiveNoun,
  genus,
  imageUrl,
  timeout
}: props) {
  const [open, setOpen] = React.useState(false);
  let image: string
  if (process.env.NODE_ENV === 'production') {
    image = `https://images.weserv.nl/?url=${imageUrl.FullSize}`
  } else {
    image = imageUrl.FullSize
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PhotoModal
        open={open}
        handleClose={handleClose}
        image={image}
        title={title}
        description={description}
        family={family}
        collectiveNoun={collectiveNoun}
        genus={genus}
      />

      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...({ timeout: timeout })}
      >
        <Card
          onClick={handleClickOpen}
          sx={{
            p: 0,
            userSelect: 'none',
            flexBasis: `calc(20% - ${GRID_GAP})`,
            '&:hover': {
              border: '3px dotted #001c55',
              color: '#001c55',
              background: '#fff'
            },
            '@media screen and (max-width: 1380px)': {
              flexBasis: `calc(25% - ${GRID_GAP})`,
            },
            '@media screen and (max-width: 1024px)': {
              flexBasis: `calc(33.3% - ${GRID_GAP})`,
            },
            '@media screen and (max-width: 768px)': {
              flexBasis: `calc(50% - ${GRID_GAP})`,
            },
            '@media screen and (max-width: 560px)': {
              flexBasis: '100%',
              mr: GRID_GAP
            }
          }}
        >

          <CardMedia
            component="img"
            height="200"

            image={image}
            alt={title}
          >
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>

          </CardContent>

        </Card>
      </Grow>

    </>

  )
}
