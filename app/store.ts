import { ProductItem } from '@/types/productTypes';
import { User } from '@/types/userTypes';
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
  total:number,
  type:string,
  solded: number,
  discountPercent:number,
  description: number,
}

type Carts = {
  carts:ProductItem[]|[];
  addItem:(newItem:ProductItem)=>void;
  removeItem:(itemId:string)=>void;
  removeAllItems:()=>void;
  reduceQuantity:(itemId:string)=>void;
  increaseQuantity:(itemId:string)=>void;
}

export const useCarts = create<Carts>((set)=>({
  carts:[],
  removeItem:(itemId:string)=>set((state)=>({carts:state.carts.filter((item)=>item.id!=itemId)})),
  reduceQuantity:(itemId:string)=>set((state)=>({carts:state.carts.map((cart)=>{
    if(itemId===cart.id && cart.quantity!>1){
      return {...cart,quantity:cart.quantity!-1}
    }else{
      return cart
    }
  })})),
  increaseQuantity:(itemId:string)=>set((state)=>({carts:state.carts.map((cart)=>{
    if(itemId===cart.id && cart.quantity!+1<=cart.left){
      return {...cart,quantity:cart.quantity!+1}
    }else{
      return cart
    }
  })})),
  addItem:(newItem:ProductItem)=>set((state)=>({carts:addNewItem(state.carts,newItem)})),
  removeAllItems:()=>set((state)=>({carts:[]}))
}))

type reduxUser = {
  user:undefined|User,
  setUser:(user:any)=>void
}

export const useUser = create<reduxUser>((set)=>({
  user:undefined,
  setUser:(user:any)=>set(()=>({user:user}))
}))

const addNewItem = (carts:ProductItem[],newItem:ProductItem)=>{
  const alreadyExist = carts.find((cart)=>cart.id===newItem.id)
  if (alreadyExist){
    return carts.map((cart)=>{
      if(newItem.id===cart.id && cart.quantity!+1<=cart.left){
        return {...cart,quantity:cart.quantity!+1}
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