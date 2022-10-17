import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import "./_Card.scss";
import { removeProductBasket, updateProductBasket } from "../../store/reducers/actions/basketActions";
import { useDispatch } from "react-redux";
const CartItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='cart_item'>
                <div className="item_photo_wrapper">
                    <img src={item.image.url} alt="" className='main_item_photo' />
                </div>
                <div className="item_info">
                    <p className='item_name'>{item.name}</p>
                    <div className="color_price">
                        <span className='item_color'>Rəng : Yellow</span>
                        <span className='item_price'>{item.price.formatted_with_code}</span>
                    </div>
                </div>
                <div className="item_quantity">
                    <button className='count' onClick={() => dispatch(updateProductBasket({ productId: item.id, quantity: item.quantity - 1 }))}>-</button>
                    <span className='counter'>{item.quantity}</span>
                    <button className='count' onClick={() => dispatch(updateProductBasket({ productId: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <div className="item_delete">
                    <button style={{ border: "none", backgroundColor: "transparent" }} onClick={() => dispatch(removeProductBasket(item.id))}><FaTrashAlt /></button>
                </div>
            </div>
        </>
    )
}

export default CartItem;