import React from 'react'
import {
  MenuItem
} from '@mui/material'

// redux
import { useAppDispatch } from '../redux/hooks'
import { fetchPhotos } from '../redux/photoSlice'
import type { EndPoint } from '../redux/photoSlice'

type props = {
  categories: EndPoint[],
  tabSelected: EndPoint
}

export default function NavCategories({ categories, tabSelected }: props) {
  const dispatch = useAppDispatch()
  return (
    <>
      {
        categories.map((category: EndPoint, i) => {
          let title: string = 'No category'
          if (category === 'animals') {
            title = "ANIMALS"
          } else if (category === 'fruitveg') {
            title = 'FRUITS & VEG'
          }
          return (
            <MenuItem
              key={i}
              disabled={tabSelected === category}
              onClick={() => dispatch(fetchPhotos(category))}
              sx={{
                alignSelf: 'stretch',
                color: '#001c55'
              }}
            >
              {title}
            </MenuItem>
          )
        })
      }
    </>
  )
}
