"use client"
import Btn from '@/Components/Btn/Btn'
import ProductCard from '@/Components/ProductCard/ProductCard'
import { loadState, saveState } from '@/Utils/LocalstorageFn'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const Index = () => {
    const [localUser,setLocalUser] = useState<{name?:string,email?:string} | null>(null)
    const [wishlistItems, setWishlistItems] = useState([]);

    const router= useRouter()
    const fetchUserAndList = async () => {
            const user = localStorage.getItem('24j1i2cj4io-dadxzazd213')
            if (user) {
                   let parsedUser = JSON.parse(user)
                   if (!parsedUser) {return}
                   setLocalUser(parsedUser)
            }
            const existingWishlist = loadState('rFSA4fsaj214-dXDSkf21') || [];
            setWishlistItems(existingWishlist);
        }
    const logout = () => {
        localStorage.removeItem('24j1i2cj4io-dadxzazd213')
        localStorage.removeItem('5if16wt1')
        setLocalUser(null)

    }
    const handleRemoveFromWishlist = (_id : string) => {
        const updatedWishlist = wishlistItems.filter((item:any) => item?._id !== _id);
        saveState('rFSA4fsaj214-dXDSkf21', updatedWishlist);
        setWishlistItems(updatedWishlist);
    };
    useEffect(()=>{
        fetchUserAndList()
        
    },[])

  

  return (
    <Box sx={{pt:25,mx:2}}>
    {
     <Grid container >
            {
                localUser && localUser?.email && localUser?.name  ?<Grid item xs={12} sm={8} md={3} >
                <Typography sx={{mb:1,fontSize:'1.5em',fontWeight:'600'}}>
                    User Details
                </Typography>
                <Box>
                <strong>User Name:</strong> <span>{localUser?.name}</span>
                <br/>
                    <strong>Email:</strong> <span>{localUser?.email}</span>
                <Btn sx={{mt:2}} onClick={()=>logout()}>Logout</Btn>
                </Box>
        </Grid>
        :
          <Box sx={{my:12,mx:1}} className='flex center auto col' >
        <Typography sx={{textAlign:'center',fontSize:'1.1em',px:1,maxWidth:'500px'}}>Please login in order to save your wishlist and unlock many more amazing features.</Typography>
        <Btn 
        onClick={()=>router.push('/account/login')}
        sx={{margin:'.75em auto',width:'120px'}}>Login</Btn>
        <Divider></Divider>
    </Box>

            }
            
            <Grid className='auto' xs={12} sm={4} md={8.9}>
                <Box sx={{mt:{xs:6,sm:5},borderLeft:{sm:'1px solid #00000c21' },width:'100%',height:'1000px'}}> 
                <Typography sx={{textAlign:'center',mb:1,fontSize:'1.5em',fontWeight:'600'}}>
                       Your Wish List
                    </Typography>
                    <Box className="flex row wrap center auto">

                    {
                        wishlistItems && wishlistItems?.length > 0 ? wishlistItems.map((item:any)=>{
                            if (!item?._id) return;
                            return <ProductCard
            newArrival={item?.new ? item?.new : false}
            stock={Number(item?.stock)}
                            soon={item?.soon ? item?.soon : false}
                            key={item?._id}
                            inStock={item?.inStock 
                            }
                            onRemove={() => handleRemoveFromWishlist(item._id)}
                            whishedItem={true} _id={item?._id} title={item?.title} price={item?.newPrice ?item?.newPrice: item?.price} images={[`${item?.img}`]} category={item?.category}/>
                        })
                        :
                        <Typography className='center auto' sx={{textAlign:'center',mb:1,fontSize:'.8em',fontWeight:'400'}}>
                        You have not added any products yet.
                     </Typography>
                    }
                    </Box>

                </Box>
            </Grid>

        </Grid>
       
   

    }
        
    </Box>

  )
}

export default Index