"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box sx={{my:6,mx:'auto'}}>
        <Typography sx={{fontSize:'2em'}}>

        You have successfully unsubscribed from our emails. We’re sorry to see you go.
        </Typography>
        <Typography sx={{fontSize:'1em'}}>
        If you change your mind in the future, you can always re-subscribe by visiting our website.

Thank you for your time, and we hope to see you again.
</Typography>
    </Box>
  )
}

export default Index