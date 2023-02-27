import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

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
  const [loading, setLoading] = useState(false)
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
        alert('cadastro feito')
        navigate('/')
      
    }catch (error) {
        console.log(error)
        alert('erro no cadastro')      
    }
  }

 

  async function userLogin(data: ILoginFormValues){
    try {
        const response = await api.post('/login', data)
        setUser(response.data.user)
        localStorage.setItem('@TOKEN', response.data.accessToken)
        alert('login feito')
        navigate('/shop')

    }catch (error) {
      console.log(error)
      alert('erro no login')
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