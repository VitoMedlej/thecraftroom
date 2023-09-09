"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `TheCraftRoom is a proudly Lebanese owned family company that has been operating since 2008. The business has grown organically to now be Lebanese first online craft store with over 700 brands and products.`,
    `Our vision is to provide you with the widest range of crafting products at our best prices and quick order despatch.`,
    `Our buyers scour the world to find you the hottest new products and offer them to you as quickly as we can. We aim offer you more new products and sooner. Be first with the greatest range of new products offered to you every Wednesday our What's New Wednesday emails.`,
    `Our everyday prices are great but we don’t stop there. We work hard to find you the best discounts we can. Save more with our awesome specials every Saturday in our Super Saturday Specials emails. `,
    `Why buy from TheCraftRoom?
    The one-stop shop for all your crafting needs
    Great value and awesome prices
    Great Lebanese customer service and next business day postage
    The widest range of the newest products soonest
    Free delivery in Lebanon for orders over $45`,
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:22}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://images.pexels.com/photos/6941079/pexels-photo-6941079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/>
    </Container>
  )
}

export default Index