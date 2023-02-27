import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { PublicRoutes } from './pages/PublicRoutes';
import { ProtectedRoutes } from './pages/ProtectedRoutes';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoutes />} >
        <Route index element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
      </Route>
     
     <Route path='/shop' element={<ProtectedRoutes />}>
      <Route index element={<ShopPage />} />
    </Route>

    </Routes>
  );
};

export default Router;
