import { ICartItem } from "@/Types/Types";

function totalCal(cartItems: ICartItem[]) {
    // if (!item?._id) return;
    let totalPrice = 0;

    for (const item of cartItems) {
        if (item?._id && Number(item?.newPrice ?item?.newPrice :   item?.price)) {

            totalPrice += item.qty * Number(item?.newPrice ?item?.newPrice :   item?.price);
        }
    }
    return totalPrice;
  }
  export default totalCal