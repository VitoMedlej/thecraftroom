"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'



const brands = [{
  title:'silhouette',
  img:'https://ucarecdn.com/c0701c86-58cf-4c6f-8301-01af868ffabd/images'
},
{
  title:'teckwrap',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJC5cnjZkAgouZsCEUh80dRYS21aQ_588aN7e8VItwbXaz1snrYGilvW26z7PNWXDDZY&usqp=CAU'
},
{
  title:'ek tools',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIG2nYTrGFvcBxytUlkMQkjetLhAYAJxVWBSdEC_TdQvskwY-sObNJkbbRtz_gFi4rw&usqp=CAU'
},
{
  title:'cricut',
  img:'https://ucarecdn.com/8b4188f1-3eef-4694-be6f-89aa10200a2d/cricutlogo.png'
},
{
  title:'mod podge',
  img:'https://bricolor.es/files/product_brands/2023/01/08/Mod-podge-logo.png'
},
{
  title:'we r memory keepers',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XC7wLEejlsNzFwGr1kT6wJxtvSZyKz7RvJJg6gmbKIDejp8W_Psq2lZlzu-h6f-x_2o&usqp=CAU'
},
{
  title:'sizzix',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2x89QtxapqVyHQDxrYqOjUNAikrtnXlD1EzA7zDQZR93UvpxFB6ZwEC2KIkqUiD7Ln4&usqp=CAU'
},

{
  title:'armour products',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnG1WBhkmhDNPAAM3PBcWcSEm3PRlbzMvxeX2VhDfHZ9OYnIELBZUpNnACKahYSx7L0M&usqp=CAU'
},

]
// const brands = ["Teckwrap", "Cricut", "Armour Products", "Sizzix", "We R Memory Keepers", "EK Tools", "Silhouette", "Mod Podge"]

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  // const cates = resImages?.first ? [resImages?.first , resImages?.second , resImages?.third , resImages?.fourth ,resImages?.fifth] : [
  //   'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',
  //   'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',
  //   'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',
  //   'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',
  //   'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg'
  // ];
  
  
  // [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
  // {img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
  // {img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
  // {img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
  // {img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,
  
  // ]
  // const twinImages =resImages?.categoryImage && resImages?.categoryImage?.length > 1 ? resImages?.categoryImage  :  [{img:'https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg'},{img:'https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'}]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>

    <Container disableGutters className='wrap auto flex' sx={{pt:4,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
    {/* <Box className='flex auto wrap ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        resImages?.categoryImage && resImages?.categoryImage.map((img:any)=>{
          return <Box className='cursor' onClick={()=>router.push('/collection/products')} key={img?.img} sx={{minWidth:'200px',my:1,width:{xs:'99%',sm:'49%',md:'48%'}}}>
            <img src={img?.img} alt="Category Image Shop Now" className="img" />
          </Box>
        })
      }
    </Box> */}

     <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}>

        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  py:'.15em',
                  // pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Explore Categories
            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}>

        {/* {cates.map((i:any)=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%'}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })} */}

{resImages?.first && <Box

onClick={()=>router.push(`${'cricut machines'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
 className='cursor'
 sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
 my:2,width:{xs:'45vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
        <img src={resImages?.first} alt={`cricut Machines Images image`} style={{borderRadius:'2%'}} className="img" />
        <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
        Cricut Machines
</Typography>
</Box>}


{resImages?.second && <Box
  onClick={() => router.push(`${'customizable-blanks'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={`${resImages?.second}`} alt={`Customizable Blanks Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Customizable Blanks
  </Typography>
</Box>}
{resImages?.third && <Box
  onClick={() => router.push(`${'hot-offers'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.third} alt={`Hot Offers Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Hot Offers
  </Typography>
</Box>}
{resImages?.fourth && <Box
  onClick={() => router.push(`${'tools-and-accessories'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fourth} alt={`New Arrivals Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Tools and Accessories
  </Typography>
</Box>}
{resImages?.fifth && <Box
  onClick={() => router.push(`${'materials'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fifth} alt={`Materials Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Materials
  </Typography>
</Box>}


            </Box>

     </Box>

      <Box/>
        <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={  data?.featuredProducts  }/>
        <Container>
        <Typography
                className='sectionTitle text-center center auto box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                padding:.5,
                pb:1,
                fontWeight: '300'
            }}>
              Shop By Brand
            </Typography>
              <Box sx={{justifyContent:{xs:'space-between',sm:'center'}}} className='wrap   flex gap1 gap'>
                {
                  brands?.map(i=>{
                    return <Box className='cursor pointer' key={i?.img} onClick={()=>router.push(`/collection/products?brand=${encodeURIComponent(i.title)}`)} 
                    sx={{border:'1px solid transparent',height:'100px',
                    width:{xs:'47%',sm:'150px'}}}>
                      <img src={i?.img} alt="" className="img contain" />
                    </Box>
                  })
                }
              </Box>
        </Container>
        <HomeProductCollection products={data?.products }/>

      
        

        
        <Perks/>

    </Container>
        <ContactSection/>
  </Box>
  )
}

export default PreLoader