import { Navigate, Outlet } from 'react-router-dom';
import { CartProvider } from '../../providers/CartContext';

export const ProtectedRoutes = () =>{

  const token = localStorage.getItem('@TOKEN')

  return(
    <CartProvider>
      {token?<Outlet />:<Navigate to={'/'} />}
    </CartProvider>
  )
}