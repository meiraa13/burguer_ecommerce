import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {

  const { products } = useContext(CartContext)

  return(

    <StyledProductList>
      {products && products.map((item)=>(
        <ProductCard key={item.id} item={item} />
      ))}
    </StyledProductList>

  )
 
};

export default ProductList;
