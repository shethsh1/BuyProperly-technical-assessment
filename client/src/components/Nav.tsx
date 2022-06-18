import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import {
  Toolbar,
  AppBar,
  IconButton,
  MenuList,
  Collapse
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

// redux
import { useAppSelector } from '../redux/hooks'
import type { EndPoint } from '../redux/photoSlice'
// components
import NavCategories from './NavCategories'

export default function Nav() {

  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const size = useWindowSize()
  const categories: EndPoint[] = ['animals', 'fruitveg']

  const tabSelected = useAppSelector(state => state.photo.tabSelected)

  useEffect(() => {
    if (size.width !== undefined && size.width > 768) {
      setToggleNav(false)
    }

  }, [size])


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
              "@media screen and (max-width: 768px)": {
                display: !toggleNav ? "none" : "flex",
                flexDirection: "column",
                position: "absolute",
                top: "80px",
                color: "black",
                alignSelf: "stretch",
                width: "100%",
                alignItems: "flex-start",
                overflow: 'hidden',
                zIndex: 99999,
                background: 'white',
                right: '0.5px'
              }
            }}
          >
            {
              size.width !== undefined && size.width > 768 ?
                <NavCategories categories={categories} tabSelected={tabSelected} />
                :
                <Collapse in={toggleNav} sx={{ flex: 'none', width: '100%', overflow: 'hidden' }}>
                  <NavCategories categories={categories} tabSelected={tabSelected} />
                </Collapse>
            }
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
    </>
  )
}