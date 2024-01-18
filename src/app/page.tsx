
import PreLoader from "@/Components/PreLoader"
import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"
async function fetchData() {
  try {
    const req = await fetch(`https://www.thecraftroom-lb.com/api/get-data`,{ cache: 'no-store' ,next:{revalidate:0}});
    let res = await req.json();
    if (res) return res
    // use the response 'res' as needed
  } catch (error) {
    console.error(`Error: ${error}`);
    // handle the error as needed
  }
}

export default async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })


//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
      // const req = await fetch(`https://www.thecraftroom-lb.com/api/get-data`,{ cache: 'no-store' ,next:{revalidate:0}})
      // let res = await req.json()
      const res = await fetchData()
      // console.log('res: ', res);
      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/11c7944e-bdec-4962-bcad-f24fe432bca6/basket/Images`,{ next: { revalidate: 400 } })
      // let resImages : any = reqImages && await  reqImages.json();
      // let res = {data:null}
        let resImages = {
          MainCarousel: [
            {
              img: "https://ucarecdn.com/86bf0636-d0f4-4cc8-80f8-0dfe13c32f9a/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/10f77ede-3f73-4e76-b8fd-78aa45525f3b/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/6dc7e192-1829-4749-b5f3-3891cc84e25b/",
              text: ""
            }
          ],
          first: "https://ucarecdn.com/f5ef81d8-a2ae-431e-82dd-acfb34b422de/",
          second: "https://ucarecdn.com/dc7801f9-f450-4444-af5f-4e77366daa58/",
          third: "https://ucarecdn.com/bd98e8fe-6bc9-41ab-becf-d474a450e569/",
          fourth: "https://ucarecdn.com/ec8d05b4-47e4-4872-9678-d4c9cfee9b0e/",
          fifth: "https://ucarecdn.com/6601b076-3ba9-4894-990f-57dda62c1cff/",
          categoryImage: [
            {
              img: "https://ucarecdn.com/92815b24-10d5-4bbe-a78d-f0a2f909c163/",
              category: ""
            },
            {
              img: "https://ucarecdn.com/a6ef17df-a1ff-42ea-b6fd-6b52063808c5/",
              category: ""
            }
          ]
        };
      return (
        <PreLoader resImages={resImages || null} data={res?.data}/>
       )
}
catch (e) {
  console.log('e home: ', e);
  return (
    <PreLoader resImages={null} data={ null}/>
   )

}
    


}
