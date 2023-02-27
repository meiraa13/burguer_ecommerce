import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProducts } from '../../../providers/CartContext';

interface IProductCard{
  item:IProducts;
}

const ProductCard = ({ item }:IProductCard) => {


  return(
    
  <StyledProductCard>
      <div className='imageBox'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>{item.name}</StyledTitle>
        <StyledParagraph className='category'>{item.category}</StyledParagraph>
        <StyledParagraph className='price'>{item.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'> Adicionar </StyledButton>
      </div>
  </StyledProductCard>


  )
 
};

export default ProductCard;
