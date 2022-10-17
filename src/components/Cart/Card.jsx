import React, { useEffect } from 'react';
import shopping from "../../img/shopping-cart.png";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./_Card.scss";
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { emptyBasket, fetchBasketData } from '../../store/reducers/actions/basketActions';


const Card = () => {

    const dispatch = useDispatch();

    const { basketData } = useSelector(state => state.basket);
    useEffect(() => {
        dispatch(fetchBasketData())
    }, [])

    return (

        !basketData.line_items ? <Loader /> : <div className="basket_wrapper">
            <h2 className='basket_count'>Səbət ({
                basketData.line_items.length ? <span>{basketData.line_items.length}</span> : <span>0</span>
            }) məhsul</h2>
            {
                basketData.line_items.length ?
                    <div className="fill_basket">
                        <div className="cart_item_wrapper">
                            {
                                basketData.line_items.map((item) => {
                                    return <CartItem key={item.id} item={item} />
                                })
                            }

                        </div>
                        <div className="cart_information">
                            <h3 className='common'>Umumi</h3>
                            <div className="total">
                                <p className='deliver'>Mebleg</p>
                                <p className='change'>{basketData.subtotal.formatted_with_code}</p>
                            </div>
                            <div className="total">
                                <p className='deliver'>Çatdırılma</p>
                                <p className='change'>0.00 m</p>
                            </div>
                            <div className="total">
                                <p className='deliver'>Hədiyyə paketi</p>
                                <p className='change'>0.00M</p>
                            </div>
                            <div className="total">
                                <p className='deliver'>Cemi</p>
                                <p className='change'>{basketData.subtotal.formatted_with_code}</p>
                            </div>
                            <button className='empty' onClick={() => {
                                dispatch(emptyBasket())
                            }}>Empty Cart</button>
                            <button className='checkout'>Checkout</button>
                        </div>
                    </div>
                    : <div className="empty_basket">
                        <div className="shopping_img">
                            <img src={shopping} alt="shopping cart" className='main_shopping_img' />
                        </div>
                        <p className='empty_basket_text'>Səbətiniz halhazırda boşdur</p>
                        <Link to={"/"} className="go-shopping">Alış-verişə davam et</Link>
                    </div>
            }
        </div>
    )
}

export default Card;