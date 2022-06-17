import React, { useEffect } from 'react'
import {
  Box,
  MenuList
} from '@mui/material'

//redux
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { fetchPhotos } from '../redux/photoSlice'
import type { Photo as PhotoType } from '../redux/photoSlice'
// components
import Loading from './Loading'
//constants
import { GRID_GAP } from '../constants'
import { GROW_TIMEOUT } from '../constants'

export default function Photos() {

  const { photos, loadingPhotos, tabSelected } = useAppSelector(state => state.photo)
  let timeout = GROW_TIMEOUT
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhotos(tabSelected)).unwrap()
    }
    fetchData()

  }, [])

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
            <div>
              photo here
            </div>

          )
        })
      }
    </Box>
  )
}
