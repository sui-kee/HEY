import { create } from 'zustand'

type IsUpType = {
    isUp:boolean,
    setIsUp:(isInView:boolean)=>void
}
export const useIsUp = create<IsUpType>((set) => ({
  isUp: false,
  setIsUp: (isInView:boolean) => set(() => ({ isUp: isInView })),
}))