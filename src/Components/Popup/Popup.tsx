"use client"
import { Box, IconButton, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import Btn from '../Btn/Btn'
import {GrFormClose} from 'react-icons/gr'
import { useRouter } from 'next/navigation'


const Index = () => {
  const router = useRouter()
  const [open,setOpen] = useState(false)
  return (
    <Modal open={open} 
    onClose={()=>setOpen(false)}
    className='flex center auto items-center' sx={{}}>
    <>
      <Box className='flex row relative' sx={{background:'white',width:{xs:'100%',sm:'600px'},height:{xs:'400px',sm:'500px'}}}>
      <IconButton
      onClick={()=>setOpen(false)}
      sx={{color:'red',position:'absolute',top:0,right:0}}>
        <GrFormClose />
      </IconButton>

      <Box sx={{width:'50%',px:1,height:'100%'}} className='flex col text-center items-center center'>
        <Typography className='clr' sx={{fontSize:'1.5em',fontWeight:600}}>
          WELCOME TO THE CRAFT ROOM!
        </Typography>
        <Typography sx={{fontSize:'.8em',color:'gray',fontWeight:100}} >
        Please login to never miss out on any amazing offers!
        </Typography>
        <Btn 
        onClick={()=>
          {setOpen(false);
          router.push('/account/login')}}
        sx={{mt:2,width:'100%'}}>
          Login
        </Btn>
        <Btn v2 sx={{border:'none'}}
        onClick={()=>{setOpen(false);router.push('/account/register')}}
        
        >
          Sign In
        </Btn>
      </Box>
      <Box sx={{width:'50%'}}>
        <img src="https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img cover" />
      </Box>
      </Box>
      </>
   
    </Modal>
  )
}

export default Index