"use client"
import {Box, Typography} from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {IProduct} from '@/Types/Types'
import Btn from '../Btn/Btn'
import {useRouter} from 'next/navigation'

const HomeProductCollection = ({products} : {
    products: IProduct[] | never[]
}) => {
    const router = useRouter()
    return (
        <Box sx={{
            my: 4
        }} className='center auto'>
            <Typography
                className='sectionTitle text-center center auto box'
                sx={{
                pb: '.5em',
                px: 1,
                pt: 9,
                textAlign: 'center !important',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '300'
            }}>
               Browse Our Collection
            </Typography>
            <Btn
                onClick={() => router.push('/collection/products')}
                sx={{
                border: 'none',
                color: 'black'
            }}
                v2>
                View All
            </Btn>
            <Box
                sx={{
                mb: 2
            }}
                className='flex wrap gap1 justify-center'>
                {products && products
                    ?.length > 0 && products.map(i => {

                        return <ProductCard
                        inStock={i?.inStock 
                        }
                            newPrice={i
                            ?.newPrice}
                            key={i
                            ?._id}
                            title={i
                            ?.title}
                            price={i
                            ?.price}
                            _id={i
                            ?._id}
                            images={i
                            ?.images
                                ?.length > 0 && i
                                    ?.images[0]
                                        ?.length > 3
                                            ? i
                                                ?.images
                                                : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCX' +
                                                        'P8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                            category={i
                            ?.category}/>
                    })}
            </Box>
        </Box>
    )
}

export default HomeProductCollection