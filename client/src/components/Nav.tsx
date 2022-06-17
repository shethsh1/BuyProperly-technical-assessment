import React, { useState } from 'react'
import {
  Toolbar,
  AppBar,
  IconButton,
  MenuItem,
  MenuList
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

// redux
import { fetchPhotos } from '../redux/photoSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

export default function Nav() {

  const [toggleNav, setToggleNav] = useState<boolean>(false)

  const tabSelected = useAppSelector(state => state.photo.tabSelected)
  const dispatch = useAppDispatch()

  const toggle = () => {
    setToggleNav((prevState) => !prevState)
  }

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#fff',
          color: '#001c55',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            gap: '50px',
            '@media screen and (max-width: 768px)': {
              justifyContent: 'space-between'
            }
          }}
        >
          <IconButton onClick={refreshPage} sx={{ color: '#001c55' }}>
            <HomeIcon />
          </IconButton>

          <MenuList
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              color: '#001c55',
              '@media screen and (max-width: 768px)': {
                display: 'none'
              }
            }}
          >
            <MenuItem
              disabled={tabSelected === 'animals'}
              onClick={() => dispatch(fetchPhotos('animals'))}
              sx={{
                alignSelf: 'stretch',
                color: '#001c55'
              }}
            >
              ANIMALS
            </MenuItem>

            <MenuItem
              disabled={tabSelected === 'fruitveg'}
              onClick={() => dispatch(fetchPhotos('fruitveg'))}
              sx={{
                alignSelf: 'stretch',
                color: '#001c55'
              }}
            >
              FRUITS &#x26; VEG
            </MenuItem>
          </MenuList>


          {/* Icon button if screen width gets too small */}
          <MenuList
            sx={{
              display: 'none',
              color: '#001c55',
              '@media screen and (max-width: 768px)': {
                display: 'flex'
              }
            }}

          >
            <IconButton onClick={toggle} sx={{ color: '#001c55' }}>
              {!toggleNav ?
                <MenuIcon />
                :
                <CloseIcon />
              }
            </IconButton>
          </MenuList>

        </Toolbar>
      </AppBar>
      {/* seperate menu for smaller screens */}
      {toggleNav &&
        <MenuList
          sx={{
            display: 'none',
            flexDirection: 'column',
            '@media screen and (max-width: 768px)': {
              display: 'flex'
            }
          }}
        >
          <MenuItem
            disabled={tabSelected === 'animals'}
            onClick={() => dispatch(fetchPhotos('animals'))}
            sx={{
              alignSelf: 'stretch',
              color: '#001c55'
            }}
          >
            ANIMALS
          </MenuItem>

          <MenuItem
            disabled={tabSelected === 'fruitveg'}
            onClick={() => dispatch(fetchPhotos('fruitveg'))}
            sx={{
              alignSelf: 'stretch',
              color: '#001c55'
            }}
          >
            FRUITS &#x26; VEG
          </MenuItem>
        </MenuList>}
    </>
  )
}