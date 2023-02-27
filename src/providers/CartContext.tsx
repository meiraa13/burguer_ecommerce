import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IDefaultProviderProps } from "./UserContext";

export const CartContext = createContext({} as ICartContext)

export interface IProducts{
  category:string;
  id:number;
  img:string;
  name:string;
  price:number;
}

interface ICartContext{
  products:IProducts[]
}

export function CartProvider({children}:IDefaultProviderProps){

  const [products, setProducts] = useState<IProducts[]>([])


  useEffect(()=>{
    async function loadProducts(){
      try {
          const token = localStorage.getItem('@TOKEN')
          if(token){
            const response = await api.get('/products',{
              headers:{
                Authorization: `Bearer ${token}`
              }
            })
            setProducts(response.data)
          }
       

      } catch (error) {
        console.log(error)
      }

    }
    loadProducts()

  },[])

 

  return(
      <CartContext.Provider value={{ products }}>
        {children}
      </CartContext.Provider>
  )

}