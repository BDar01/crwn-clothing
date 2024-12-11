import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, ImageContainer, Text, Quantity, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Text>{name}</Text>
            <Quantity>
                <div onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={addItemHandler}>
                    &#10095;
                </div>
            </Quantity>
            <Text>{price}</Text>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;