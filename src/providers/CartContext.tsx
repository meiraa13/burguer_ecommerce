import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IDefaultProviderProps } from "./UserContext";
import { toast } from "react-toastify";

export const CartContext = createContext({} as ICartContext)

export interface IProducts{
  category:string;
  id:number;
  img:string;
  name:string;
  price:number;
  toLowerCase?:string
}

interface ICartContext{
  products:IProducts[];
  modal:boolean;
  setModal:React.Dispatch<React.SetStateAction<boolean>>;
  addProductToCart:(product: IProducts) => void;
  currentSale:IProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<IProducts[]>>;
  removeProductFromCart:(productId: number) => void;
  filteredProducts:IProducts[] | string;
  setFilteredProducts:React.Dispatch<React.SetStateAction<IProducts[] | string>>;
  searchValue:string;
  setSearchValue:React.Dispatch<React.SetStateAction<string>>;
}

export const CartProvider = ({children}:IDefaultProviderProps) =>{

  const [products, setProducts] = useState<IProducts[]>([])
  const [modal, setModal] = useState(false)
  const [currentSale, setCurrentSale] = useState<IProducts[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProducts[] | string>('')
  const [searchValue, setSearchValue] = useState('')



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

  const addProductToCart = (product:IProducts) =>{
    const checkCart = currentSale.find((item) => item.id == product.id);

    if (checkCart) {
      toast.error("Este produto já está no carrinho!");
    } else {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto adicionado com sucesso!");
    }
  }

  const removeProductFromCart = (productId:number) =>{
    const filteredList = currentSale.filter((item) => item.id !== productId);
    setCurrentSale(filteredList);
    toast.warning("Produto removido");
  }

  return(
      <CartContext.Provider value=
      {{ products, modal, setModal, addProductToCart, currentSale, setCurrentSale,removeProductFromCart,filteredProducts,searchValue,setFilteredProducts,setSearchValue }}>
        {children}
      </CartContext.Provider>
  )

}