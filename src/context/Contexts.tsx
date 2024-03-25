"use client"
import { createContext, useContext, useState } from "react";
import NextNProgress from 'nextjs-progressbar';


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const DiscountContext = createContext < any > (0);
export const PromoContext = createContext < any > (0);
export const CartLengthContext = createContext < any > (0);



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const [cates,
                setCates] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [promoCode, setpromoCode] = useState(null);
    const [cartLength, setCartLength] = useState(0);

            return (
                <PromoContext.Provider value={{promoCode,setpromoCode}}>
                <CartLengthContext.Provider value={{cartLength,setCartLength}}>


                <DiscountContext.Provider value={{discountedPrice,setDiscountedPrice}}>

                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{cates, setCates}}>
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        {/* <SideBar cates={cates}/> */}
            {/* <QuickCart/> */}
            
            {children}
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
    </DiscountContext.Provider>
    </CartLengthContext.Provider>

    </PromoContext.Provider>

            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
export const useDiscountContext = () => useContext(DiscountContext);
export const usePromoContext = () => useContext(PromoContext);
export const useCartLengthContext = () => useContext(CartLengthContext);
