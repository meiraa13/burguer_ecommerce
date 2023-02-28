import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ICartProductListProps } from '..';
import { useContext } from 'react';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = ({ item }:ICartProductListProps) => {

  const { removeProductFromCart } = useContext(CartContext)

  return(
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'> {item.name} </StyledTitle>
        <button type='button' onClick={()=>{removeProductFromCart(item.id)}}  aria-label='Remover'><MdDelete size={24} /></button>
      </div>
    </StyledCartProductCard>
  )

};

export default CartProductCard;
