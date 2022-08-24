import './cart-item.styles.jsx';
import {CartItemContainer, ItemDetails } from '../cart-item/cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
const {name, imageUrl, price,quantity} = cartItem;

  return ( 
    <CartItemContainer>
      <img src={imageUrl} alt={`${ name }`} />
      <b/>
      <ItemDetails>
        <span > {name}</span>
        <span className='price'>
         {quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;