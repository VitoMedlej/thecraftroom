"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
// import DirectionsIcon from '@mui/icons-material/Directions';
// 
import {CiSearch} from 'react-icons/ci'

export default function SearchInput({sx,mobile}:{mobile?:boolean,sx?:any}) {
  const router = useRouter()
  const [value,
    setValue] = React.useState('');
    const handleSearch = (e : React.FormEvent < HTMLFormElement >) => {
        e.preventDefault()
        if (value.length > 0) {
            router.push(`/collection/products?limit=80&search=${value}`)
        }
    }

  return (
    <Paper
    onSubmit={(e)=>handleSearch(e)}
      component="form"
      className='searchinput '
      sx={{
        py:'.25em',
        mt:'.25em',
        px:'.5em',
        mb:'.5em',
        flex:1,
        flexBasis:'100%',
        boxShadow:'none',
        border:'1px solid #00000036',
        borderRadius:'20px',
        
         display: mobile ? {xs:'flex',md:'none'} : {xs:'none',md:'flex'},
          alignItems: 'center',width:'100%',maxWidth: {xs:'95vw',md:'350px',lg:'450px'} 
         ,...sx
        }}
    >
   
      <InputBase
      value={`${value}`}
      onChange={(e)=>{ 
        
        setValue && setValue(`${e.target.value as string}`)}}
        sx={{
          display: 'flex',
          ml: 1,w:'100%', flex: 1 }}
        placeholder="Search Anything"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
       
      type="submit" className='searchIcon   trans' sx={{borderRadius:0,p: '5px' }} aria-label="search">
        <CiSearch />
      </IconButton>
     
    </Paper>
  );
}