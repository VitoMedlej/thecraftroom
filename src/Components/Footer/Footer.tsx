"use client"
import Link from 'next/link';
import {Typography , Box } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'black',background:'white'}}>
    <div className="container " style={{color:'black',background:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='/icon.png' alt="the craft room Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.9em',color:"2b2b2b" }}  className='footer-p '>
          Welcome to The Craft Room, where creativity becomes reality. Located in Lebanon, we offer a wide selection of arts and crafts supplies, including Cricut products, to help you unleash your creativity. Whether you’re a professional artist or just starting out, we have everything you need to bring your ideas to life. Shop now and discover the endless possibilities of crafting.
          </Typography>
          <SMicons/>

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='link-title'>Site links</li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/collection/products">All Products</Link></li> 
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/info/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>Contact</li>
            <li><Link href="mailto:sales@thecraftroom-lb.com">sales@thecraftroom-lb.com</Link></li>
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/thecraftroom.lb/?next=https%3A%2F%2Fwww.instagram.com%2Fticketshopcol%2Fp%2FBwKRsoxI8Tf%2F%3Fhl%3Dcs%26__coig_login%3D1" target="_blank" rel="noreferrer" >@thecraftroom</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >Call Us</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
        <Box className='flex wrap'> 
                        <Typography sx={{width:'100%',fontWeight:500,pb:.5}}>
                            We Also Accept:
                        </Typography>
                        <Box className="wrap">

                        <Box sx={{width:'80px'}}>
                        <img src="https://whish.money/app/logos/whish_v2.png" alt="Whish Money Payment method logo" className="img contain" />
                        </Box>
                        <Box sx={{width:'80px'}}>
                        <img src="https://th.bing.com/th/id/R.ece974086208cee8d37d21123f562abe?rik=4IJtiW%2b9iesE9w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-IaVdwhUI7ZU%2fUBerQ27aeLI%2fAAAAAAAAAEo%2f0hnhKNuuna4%2fs1600%2fOMT-BLACK-LOGO.jpg&ehk=PssKqWqp%2bXRrShOU%2bTU%2bxGsH89Y%2fTze%2bIql7rR3SBf4%3d&risl=&pid=ImgRaw&r=0" alt="Whish Money Payment method logo" className="img contain" />
                        </Box>
                        <Box sx={{width:'80px',ml:2}}>

<img src="https://ucarecdn.com/a8afd824-ff38-4683-b789-e0868f7242f7/WU.png" alt="Western Union Money Payment method logo" className="img contain" />
</Box>
                        </Box>
                    </Box>
      </div>
    </div>

    <div className="site-footer__bottom " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
        <p>
        {' | '} ©Thecraftroom-lb
        </p>
      </div>
    </div>
  </footer>
);


export default Footer

