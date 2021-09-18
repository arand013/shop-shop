import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = item => {
        dispatch({ 
            type: REMOVE_FROM_CART,
            _id: item._id
        });

        idbPromise('cart', 'delete', { ...item });
    };
    return (
        <div className="flex-row">
            <div>
                <img src={`/images/${item.image}`} alt="" />
            </div>
            <div>{item.name}, ${item.price}</div>
            <div>
                <span>Qty:</span>
                <input type="number" placeholder="1" value={item.purchaseQuantity} onChange={onChange} />
                <span role="img" aria-label="trash" onClick={() => removeFromCart(item)}>
                    🗑️
                </span>
            </div>
        </div>
    );
};

export default CartItem;