import Preloader2 from "@/Components/Preloader2"
// import type {  NextApiResponse}
// from 'next';
// import {NextResponse } from 'next/server';
// import {type NextRequest} from 'next/server';



const Page = async(ctx : any) => {
  
  try {
    const {category} = ctx?.params
    const {type,brand,search} = ctx?.searchParams;
    console.log('search: ', search);
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? encodeURIComponent(type) : null}&page=${0}&brand=${brand ? encodeURIComponent(brand) : null}&search=${search ? search : null}`
    ,{cache:'no-store',next:{revalidate:0}})
    const res = await req.json();    

    // const totalPages = 1;
    // const products = {}
 

    return (<Preloader2 totalPages={res?.data?.totalPages || 1} data={res?.data?.products || null}/>)
  }
catch (err) {
  console.log('err: ', err);
  
  return (<Preloader2 totalPages={1} data={null}/>)

}
}

export default Page


