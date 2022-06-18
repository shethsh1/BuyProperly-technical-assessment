import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function TopButton() {

  const [show, setShow] = useState<boolean>(false)

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function scrollFunction() {
    if (window.scrollY > 20) {
      setShow(true)
    } else {
      setShow(false)
    }
  }


  useEffect(() => {
    window.onscroll = () => {
      scrollFunction()
    }
  }, [])

  return (
    <Box
      visibility={show ? 'visible' : 'hidden'}
      onClick={topFunction}
      component="button"
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: '99',
        border: 'none',
        outline: 'none',
        backgroundColor: '#001c55',
        color: '#fff',
        cursor: 'pointer',
        padding: '15px',
        borderRadius: '15px',
        fontSize: '25px'
      }}
    >
      <ArrowUpwardIcon sx={{ fontWeight: 900 }} />

    </Box>

  )
}