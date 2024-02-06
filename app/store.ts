import { create } from 'zustand'

type IsUpType = {
    isUp:boolean,
    setIsUp:(isInView:boolean)=>void
}
export type Item = {
  id:string;//new 
  quantity:number;//new
  name: string,
  madeIn: string,
  image: string,
  price: number,
  left:number,
  solded: number,
  discountPercent:number,
  description: number,
}

type Carts = {
  carts:Item[]|[];
  addItem:(newItem:Item)=>void;
  removeItem:(itemId:string)=>void;
  reduceQuantity:(itemId:string)=>void;
  increaseQuantity:(itemId:string)=>void;
}

export const useCarts = create<Carts>((set)=>({
  carts:[],
  removeItem:(itemId:string)=>set((state)=>({carts:state.carts.filter((item)=>item.id!=itemId)})),
  reduceQuantity:(itemId:string)=>set((state)=>({carts:state.carts.map((cart)=>{
    if(itemId===cart.id && cart.quantity>1){
      return {...cart,quantity:cart.quantity-1}
    }else{
      return cart
    }
  })})),
  increaseQuantity:(itemId:string)=>set((state)=>({carts:state.carts.map((cart)=>{
    if(itemId===cart.id && cart.quantity+1<=cart.left){
      return {...cart,quantity:cart.quantity+1}
    }else{
      return cart
    }
  })})),
  addItem:(newItem:Item)=>set((state)=>({carts:addNewItem(state.carts,newItem)})),
}))

const addNewItem = (carts:Item[],newItem:Item)=>{
  const alreadyExist = carts.find((cart)=>cart.id===newItem.id)
  if (alreadyExist){
    //   return [...carts,{
    //     ...alreadyExist,
    //     quantity:alreadyExist.quantity+1<=alreadyExist.left?
    //     alreadyExist.quantity+1:
    //     alreadyExist.quantity
    //   }
    // ]
    return carts.map((cart)=>{
      if(newItem.id===cart.id && cart.quantity+1<=cart.left){
        return {...cart,quantity:cart.quantity+1}
      }else{
        return cart
      }
    })
  }else{
    return [...carts,newItem]
  }
}

export const useIsUp = create<IsUpType>((set) => ({
  isUp: false,
  setIsUp: (isInView:boolean) => set(() => ({ isUp: isInView })),
}))