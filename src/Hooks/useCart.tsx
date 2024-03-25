import { loadState, saveState, pushState } from "../Utils/LocalstorageFn";
import { ICartItem } from "../Types/Types";
import { useCartContext, useCartLengthContext } from "@/context/Contexts";

const useCart = () => {
    const { cartOpen, setCartOpen } = useCartContext();
    const { cartLength, setCartLength } = useCartLengthContext();

    const incrementQty = (_id:string, newValue ?: number, selectedColor?:string) => {
        const state = loadState('shping-list') || [];
        let foundIndex = state.findIndex((value: ICartItem) => value._id === _id);
        let selectedItem = state[foundIndex];
        
        if (foundIndex !== -1 && selectedItem) {
            if (newValue) {
                selectedItem.qty = newValue;
            } else {
                selectedItem.qty = selectedItem.qty + 1;
            }
            if (selectedColor) {
                selectedItem.selectedColor = selectedColor;
            }
            state[foundIndex] = selectedItem;
            saveState('shping-list', state);
            return true;
        }
        return false;
    }

    const addToCart = (selectedQuantity = 1, _id: string, product: { title: string, category?: string, img: string, _id: string, price: number, selectedColor?: string }, open = true, replaceOld = false) => {
        const increased = incrementQty(_id, selectedQuantity, product?.selectedColor);
        
        if (increased) {
            setCartOpen(open ? true : false);
            setCartLength(cartLength + 1); // Increment cartLength
            return;
        }

        pushState('shping-list', {
            qty: selectedQuantity || 1,
            img: product.img,
            category: product?.category || 'Collection',
            title: product.title,
            _id: product._id,
            price: product.price,
            selectedColor: product?.selectedColor || ''
        });

        setCartLength(cartLength + 1); // Increment cartLength
        if (open) {
            setCartOpen(true);
        }
    }

    return { addToCart, incrementQty };
}

export default useCart;
