import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IDefaultProviderProps{
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string
}

export interface IRegisterFormValues{
  email: string;
  password: string;
  name: string;
}

export interface ILoginFormValues{
  email:string;
  password:string;
}

interface IUserContext {
  user: IUser | null;
  userRegister: (data: IRegisterFormValues) => Promise<void>;
  userLogin: (data: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}: IDefaultProviderProps){
  const [ user, setUser ] = useState<IUser | null>(null)

  const navigate = useNavigate()

  useEffect(()=>{

    const token = localStorage.getItem('@TOKEN')
    if(token){
      navigate('/shop')
    }
  },[])


  async function userRegister(data: IRegisterFormValues){
    try {
        const response = await api.post('/users', data)
        setUser(response.data.user)
        localStorage.setItem('@TOKEN', response.data.accessToken)
        toast.success('Cadastro realizado!')
        navigate('/')
      
    }catch (error) {
        console.log(error)
        toast.error('Cadastro não realizado!')      
    }
  }

 

  async function userLogin(data: ILoginFormValues){
    try {
        const response = await api.post('/login', data)
        setUser(response.data.user)
        localStorage.setItem('@TOKEN', response.data.accessToken)
        toast.success('Bem-vindo!')
        navigate('/shop')

    }catch (error) {
      console.log(error)
      toast.error('Usuário ou senha inválidos')
    }
  }

  function userLogout(){

    setUser(null)
    localStorage.removeItem('@TOKEN')
    navigate('/')
  }

  return(
    <UserContext.Provider value={{user, userRegister, userLogin, userLogout}}>
      {children}
    </UserContext.Provider>
  )
}