import React from 'react';
import {useSelector} from "react-redux";
import Loader from '../Loader/Loader';
import FavoriteCartItem from './FavoriteCartItem';
import shopping from "../../img/shopping-cart.png";
import {Link} from "react-router-dom";

const FavoriteCart = () => {

    const {favoriteProducts} = useSelector((state) => state.favorite);
    console.log(favoriteProducts);

    return (
        !favoriteProducts ? <Loader /> : <div className="basket_wrapper">
            <h2 className='basket_count'>Favorites ({
                favoriteProducts.length ? <span>{favoriteProducts.length}</span> : <span>0</span>
            }) məhsul</h2>
            {
                favoriteProducts.length ?
                    <div className="fill_basket">
                        <div className="cart_item_wrapper">
                            {
                                favoriteProducts.map((item) => {
                                    return <FavoriteCartItem key={item.id} item={item} />
                                })
                            }
                        </div>
                    </div>
                    : <div className="empty_basket">
                        <div className="shopping_img">
                            <img src={shopping} alt="shopping cart" className='main_shopping_img' />
                        </div>
                        <p className='empty_basket_text'>Your favorite products were not found</p>
                        <Link to={"/"} className="go-shopping">Go main page</Link>
                    </div>
            }

        </div>
    )
}

export default FavoriteCart