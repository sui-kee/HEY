export type ProductItem= {
    _id?:any,
    name:string,
    type:"hoody"|"sneaker"|"dress"|"event_outfit",
    madeIn:string,
    image:string,
    price:number,
    left:number,
    total:number,
    solded:number,
    discountPercent:number,
    description:string,
    id:string,
    __v?:number,
    quantity?:number,
}