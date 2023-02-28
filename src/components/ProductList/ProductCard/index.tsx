import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, IProducts } from '../../../providers/CartContext';
import { useContext } from 'react';

interface IProductCardProps{
  item:IProducts;
}

const ProductCard = ({ item }:IProductCardProps) => {

  const {addProductToCart} = useContext(CartContext)

  return(
    
  <StyledProductCard>
      <div className='imageBox'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>{item.name}</StyledTitle>
        <StyledParagraph className='category'>{item.category}</StyledParagraph>
        <StyledParagraph className='price'>{item.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => {addProductToCart(item)}}> Adicionar </StyledButton>
      </div>
  </StyledProductCard>


  )
 
};

export default ProductCard;
