"use client"
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import {IconButton, Typography} from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { ICartItem } from '@/Types/Types';
import { useCartContext } from '@/context/Contexts';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import Btn from '@/Components/Btn/Btn';
import {GrFormClose} from 'react-icons/gr'
import CartProduct from '../QuantityPicker/CartProduct';

export default function QuickCart() {
    const router = useRouter()
    const {cartOpen,
        setCartOpen} = useCartContext();
        const [cartItems,setCartItems] = useState<ICartItem[]>([])
        useEffect(() =>{
            let localCart : ICartItem[] = loadState('shping-list') || []
            if (localCart) {
                
                setCartItems(localCart)
        }
    },[cartOpen])
    const pathname = usePathname()
    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setCartOpen(open);
    };
    const remove = (_id:string) => {
       let state = cartItems.filter(x => `${x._id}` !== _id);
        saveState('shping-list', state);
        setCartItems(state);
    }
    return (
        <div>
            <Drawer  anchor={'right'} open={cartOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                    // maxWidth: '500px',
                    width: '100%',

                    margin: '0 auto'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mx: '1em',
                        justifyContent: 'space-between'
                    }}>
                        <h2 
                        onClick={()=>{setCartOpen(false),router.push('/cart')}}
                            style={{
                            cursor:'pointer',
                            fontWeight: '500',
                        }}>
                             Your Cart
                        </h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <GrFormClose
                                color='red'
                                />
                        </IconButton>
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        maxHeight: '350px',
                        overflowY: 'scroll'
                        
                    }}>
                        {
                           cartItems && cartItems.length > 0 ? cartItems.map((item:ICartItem, index) =>{
                        if (!item?._id) return;
                        return <CartProduct 
                        
                        stock={Number(item?.stock)}
                        selectedColor={item?.selectedColor} 
                        _id={item._id} qty={item.qty} price={item.newPrice ? item.newPrice :  item.price} img={item.img}
                        remove={remove}
                        title={item.title} key={index}/>
                            })
                        : <Box className='auto center col flex items-center ' sx={{py:5}}>

                        <Box sx={{width:'60px'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJ1L9fmcCrMGqF0D0_kpEBDUzAr71C5Bw0fnXCzOvN_-rK5SOiLapcMwXo--Wd63pzw4&usqp=CAU" alt="Empty Cart Image" className="img" />
                        </Box>
                        <Typography sx={{fontSize:'.98em',width:'80%',py:1,textAlign:'center'}}> 
                            No Products Have Been Added.
                        </Typography>
                        </Box> 
                        }
                        
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        margin: '1em auto !important',
                       flexWrap:'wrap',
                        display:'flex',
                        width:{xs:'100%',sm:'340px'},
                    }}>
                       <Btn 
                       sx={{width:'100%',mx:1
                    ,borderRadius:25,
                    }}
                       onClick={()=>{setCartOpen(false),router.push('/cart')}}
                       disabled={cartItems.length < 1}>
                            Go to cart
                       </Btn>
                        <Btn
                         
                        sx={{
                            width:'100%',
                            mx:1
                    ,borderRadius:25,
                            background:'transparent',my:1,
                            ':hover':{background:'#1a4671',color:'white'}}}
                        onClick={()=>{
                            setCartOpen(false),
                            pathname?.includes('/products') ?
                            null :
                            router.back()
                        }}>
                        Continue Shopping
                        </Btn>
                        {/* <Btn
                        className='text-center auto'
                        sx={{mx:1,border:'none',':hover':{background:'white',color:'#1a4671'}}} 
                        onClick={()=>{setCartOpen(false),router.push('/cart')}}
                        v2={true} >
                        View Cart Page
                        </Btn> */}
                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}