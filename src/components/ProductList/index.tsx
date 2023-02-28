import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {

  const { products } = useContext(CartContext)
  const {filteredProducts} = useContext(CartContext)

  const searchProducts = products.filter((product) => {
    return filteredProducts == '' ? true : product.name.toLowerCase().includes(filteredProducts.toString().toLowerCase()) || 
    product.category.toLowerCase().includes(filteredProducts.toString().toLowerCase());});

  return(

    <StyledProductList>
      {searchProducts && searchProducts.map((item)=>(
        <ProductCard key={item.id} item={item} />
      ))}
    </StyledProductList>

  )
 
};

export default ProductList;
