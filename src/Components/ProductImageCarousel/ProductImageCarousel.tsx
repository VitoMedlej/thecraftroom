"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import { getDiscountPercentage } from "../ProductCard/ProductCard";

export default function App({data}:{data : any}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={
          {delay:2000}
        }
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative"
      >

{
          data && data?.product?.images && data?.product?.images.map((img:any)=>{
            return    <SwiperSlide className='relative' key={img}>
              <Box sx={{height:{xs:'100%',md:'600px'}}}>

            <img
            style={{maxHeight:'600px'}}
            className='img contain' src={`${img}`} alt={'Product Image'} />
              </Box>
              {getDiscountPercentage(data?.product?.price,data?.product?.newPrice) ?

<Box sx={{position:'absolute',borderRadius:'50%',right:'85%',zIndex:'2',top:'2%', width:'50px',height:'50px',background:'red'}}>
<Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

    -{getDiscountPercentage(data?.product?.price,data?.product?.newPrice) }%
</Typography>
  </Box>

:
data?.product?.soon ? 
<Box sx={{position:'absolute',borderRadius:'50%',top:'3%',right:'85%',zIndex:'2', width:'50px',height:'50px',background:'red'}}>
<Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

   SOON
</Typography>
  </Box> :
  data?.product?.new &&

<Box sx={{position:'absolute',borderRadius:'50%',top:'3%',right:'85%',zIndex:'2', width:'50px',height:'50px',background:'red'}}>
     <Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

        NEW!
     </Typography>
       </Box>
       
   }
          </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}
