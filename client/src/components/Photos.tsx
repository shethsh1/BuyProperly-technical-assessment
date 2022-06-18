import React, { useEffect } from 'react'
import {
  Box,
  MenuList
} from '@mui/material'

//redux
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { fetchPhotos } from '../redux/photoSlice'
import type { Photo as PhotoType } from '../redux/photoSlice'
//components
import Loading from './Loading'
import Photo from './Photo'
//constants
import { GRID_GAP } from '../constants'
import { GROW_TIMEOUT } from '../constants'

export default function Photos() {

  const { photos, loadingPhotos } = useAppSelector(state => state.photo)
  let timeout = GROW_TIMEOUT
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhotos('animals')).unwrap()
    }
    fetchData()

  }, [dispatch])

  if (loadingPhotos) {
    return (
      <Loading />
    )
  }

  return (
    <Box
      component={MenuList}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: GRID_GAP,
        mt: '25px',
        ml: GRID_GAP
      }}
    >
      {
        photos.map((photo: PhotoType) => {
          timeout += 250
          return (
            <Photo
              key={photo.Id}
              title={photo.Title}
              description={photo.Description}
              family={photo.Family}
              collectiveNoun={photo.CollectiveNoun}
              genus={photo.Genus}
              width={photo.Width}
              height={photo.Height}
              imageUrl={photo.ImageURLs}
              timeout={timeout}
            />
          )
        })
      }
    </Box>
  )
}
