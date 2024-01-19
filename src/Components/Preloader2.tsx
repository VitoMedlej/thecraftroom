"use client"
import React from 'react'
import {Box, Container,  Pagination, Typography} from "@mui/material"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { server } from "@/Utils/Server"
import FilterSection from './CollectionPage/FilterSection/FilterSection'
import { IProduct } from '@/Types/Types'
import BreadCrumb from './BreadCrumb/BreadCrumb'
import ProductCard from './ProductCard/ProductCard'

const Preloader2 = ({data,totalPages}:any) => {
   
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const [pageNB,setPageNB] = useState(page ? Number(page) : 1)
    const [products,setProducts] = useState<any>()
    useEffect(() => {
      
        // if (!products) {
            setProducts(data)
        // }
      
    }, [data])
    
    const {category} = useParams() 
    const type =  searchParams.get('type')
    const search =  searchParams.get('search')
    // const type =  searchParams.get('type')
    // const {type} = useSearchParams();




    const fetchData = async (val:number) => {
        router.push(`/${category || 'collection'}/products?type=${type ? encodeURIComponent(type) : null}&page=${Number(val) }`)
      
    const url =  `/api/get-cate?category=${category ? category : 'collection'}&page=${Number(val - 1) || 0}&search=${search ? search : null}&type=${type ? encodeURIComponent(type) : null}`  ;
    // const url = '/abc'
    const req = await fetch(`${server}${url}`,{cache:'no-store', next: { revalidate: 0 }})
    const res = await req.json()
    console.log('res: ', res);
        
            setProducts(res?.data?.products ? res?.data?.products : [])
            // console.log('totalPages: ', totalPages);
            totalPages = res?.data?.totalPages;
            // console.log('totalPages2: ', totalPages);
            if (window) {
                window.scrollTo(0,0)
            }

      };
  
    // const handlePagination = async (val:number) => {
    //     // router.replace(`${server}/${category ?category : 'collection'}/products?page=${val ? val : 0}`)
    //     fetchData()
    // }
    // const [data,setData] = useState< {
    //     products: IProduct[] | never[] ; 
       
    // }>({
    //     products : [],
       
    //   })
  return (
    <Container sx={{mt:15}} disableGutters maxWidth='lg'>
    <Box
        sx={{
        width: '100%',
        minHeight: '100px'
    }}>
<FilterSection setProducts={setProducts}/>
    </Box>
    <BreadCrumb></BreadCrumb>
   

    <Box className='flex wrap' sx={{
        px: 1
    }}>
        {products && products?.length > 0 ? products.map((i:IProduct) => {
            return <ProductCard
            key={i?._id}
            inStock={i?.inStock 
            }
            newPrice={i?.newPrice}
                _id={i._id}
                title={i.title}
                price={i.price}
                images={i.images}
                category={i.category}/>
        })
: <Typography>
No products found, try a different category...
</Typography>}
    </Box>
    <Pagination
    page={Number(page) ? Number(page) : 1}
        onChange={(e, val) => {
            console.log('val: pagi', val);
            setPageNB(val)
            fetchData(val)
    }}
        sx={{
        my: 3
    }}
        count={totalPages > 1 
        ? totalPages
        : 1}
        className='flex center '/>


</Container>
  )
}

export default Preloader2