"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'
import WishlistButton from './WishlistButton'






export function getDiscountPercentage(oldPrice: number, newPrice?: number): number | undefined {
    if (!oldPrice || !newPrice || !Number(oldPrice) || !Number(newPrice)) {
      return undefined;
    }
    const discount = Number(oldPrice) - Number(newPrice);
    const discountPercentage = (discount / oldPrice) * 100;
    return Number(discountPercentage.toFixed(1)) || undefined;
  }



const ProductCard = ({
    title,
    inStock,
    price,
    images,
    category,
    _id,
    soon,
    width,
    newPrice,
    newArrival,
    stock,
    height,
    whishedItem,
    onRemove
} : {
    _id: string,
    newArrival?: boolean
    stock : number;
    inStock ?: boolean,
title: string,
soon : boolean,
    price: number,
    images: string[],
    category: string,
    width?: string | number
    height?: string | number,
    newPrice ?: number,
    whishedItem ?:boolean,
    onRemove?: (_id: string) => void
}) => {
    const router = useRouter()
    const {addToCart}= useCart()
    // const [liked,setLiked] = React.useState(false)

    return (
        <Box
            className='relative  trans'
            sx={{
            border : '1px solid #000000a',
            py: 1,
            margin:{xs: '1em auto' ,sm: '.55em auto'},
            // minWidth: {xs:'200px',sm:'32%',md:'283px',lg:'300px'},
            width: width
                ? width
                : 
                {
                    xs: '49%',
                    sm: '32%',
                    xl:'23%'
                }
                // {
                //     xs: '98%',
                //     sm: '32%',
                //     xl:'23%'
                // }
        }}>
            <Box 
            className='cursor'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                height: height || {xs:'180px',sm:'300px',md:'350px'}
            }}>
                <img
                    src={images
                    ? `${images[0]}-/resize/400/`
                    : ''}
                    alt="Prdouct image"
                    className="img contain"/>

            </Box>
             {getDiscountPercentage(price,newPrice) ?

             <Box sx={{position:'absolute',borderRadius:'50%',top:'0%',left:'1%',zIndex:1, width:'50px',height:'50px',background:'red'}}>
             <Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

                 -{getDiscountPercentage(price,newPrice) }%
             </Typography>
               </Box>

             :
             soon ? 
             <Box sx={{position:'absolute',borderRadius:'50%',top:'0%',left:'1%',zIndex:1, width:'50px',height:'50px',background:'red'}}>
             <Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

                SOON
             </Typography>
               </Box> :
               newArrival &&

             <Box sx={{position:'absolute',borderRadius:'50%',top:'0%',left:'1%',zIndex:1, width:'50px',height:'50px',background:'red'}}>
                  <Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

                     NEW!
                  </Typography>
                    </Box>
                    
                }


            <Box 
            sx={{
                px: .95
            }}>
                    <Typography
                    sx={{
                    fontWeight: '300',
                    fontSize: '.76em'
                }}>
                    {category}
                </Typography>
               
                <Typography
            className='limited cursor '

                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                    fontSize: {xs:'.69em',sm:'1.195em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
              
              
                {/* <Typography
                    sx={{
                    my: .5,
                    color:'green',
                    fontWeight: '400',
                    fontSize: {xs:'1.01em',sm:'1.16em'}
                }}>
                    {price}$
                </Typography> */}


{soon ? (
    <Typography
        sx={{
            my: 0.5,
            color: 'green', // Customize the color as needed
            fontWeight: '400',
            fontSize: { xs: '1.01em', sm: '1.16em' }
        }}
    >
        Coming Soon
    </Typography>
) : 
(
    newPrice  ? (
        <Typography
            sx={{
                display: inStock !== false ? 'flex' : 'none',
                my: 0.5,
                color: 'green',
                fontWeight: '400',
                fontSize: { xs: '1.01em', sm: '1.16em' }
            }}
        >
            <del>${price}</del>{' '}
            <span style={{ color: 'red' }}>${newPrice}</span>
        </Typography>
    ) : (
        <Typography
            sx={{
                display: Number(stock) === 0 || inStock !== false ? 'flex' : 'none',
                my: 0.5,
                color: 'green',
                fontWeight: '400',
                fontSize: { xs: '1.01em', sm: '1.16em' }
            }}
        >
            ${price || 0}
        </Typography>
    )
)}

{!soon && inStock !== false && Number(stock) !== 0 ? (
    <Box className="flex">
        {!whishedItem && (
            <Btn
                className='cursor gap1'
                onClick={() => addToCart(1, _id, { title, category, img: images[0], _id, price: Number(newPrice) ? Number(newPrice) : price }, true)}
                sx={{
                    color: 'white',
                    padding:'inherit',
                    width: {xs:'80%',sm:'70%'},
                    fontSize:{xs:'.56em',sm:'.8em'},
                    borderRadius: 25
                }}
            >
                Add To Cart
            </Btn>
        )}
        <WishlistButton onRemove={onRemove} productId={_id} product={{ title, price, images, category, _id, width, height }} />
    </Box>
) : (
    !soon && (
        <Typography
            sx={{
                mb: 0.5,
                color: 'red',
                fontWeight: '600',
                fontSize: { xs: '0.99em', sm: '1.06em' }
            }}
        >
            Out Of Stock
        </Typography>
    )
)}


                </Box>




            </Box>
    
        ) 
}

export default ProductCard