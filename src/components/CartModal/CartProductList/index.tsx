import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext, IProducts } from '../../../providers/CartContext';
import { useContext } from 'react';

export interface ICartProductListProps{
  item:IProducts
}

const CartProductList = () => {

  const {currentSale, setCurrentSale} = useContext(CartContext)

  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return(
    <StyledCartProductList>
      <ul>
        {currentSale.map((item)=>(
          <CartProductCard key={item.id} item={item} /> 
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {totalPrice}</StyledParagraph>
      </div>
      <StyledButton onClick={()=>{setCurrentSale([])}} $buttonSize='default' $buttonStyle='gray'> Remover todos </StyledButton>
    </StyledCartProductList>
  )
 
};

export default CartProductList;
