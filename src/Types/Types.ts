export interface IProduct {
    title: string;
    price: number;
    soon : boolean;
    _id: string;
    new ?: boolean;
    description: string;
    images: string[] | [];
    attributes ?: [] | 
        {
            name : string,
            value : string | number
        }[]
    ;
    category : string;
    isFeatured?: boolean;
    newPrice?:number;
    inStock ?:boolean;
    stock:number;
}
export interface ICartItem {
    newPrice?: number;
    stock: number;

    title: string;
    _id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
    selectedColor ?: string;
}