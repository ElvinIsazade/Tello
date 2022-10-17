import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import "./_BestSelling.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchBasketData } from '../../store/reducers/actions/basketActions';
import { bestSelling } from '../../store/reducers/actions/productsActions';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import Toastify from '../Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";



const BestSelling = ({ showInfo }) => {

    const { bestSellingProducts } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bestSelling())
        dispatch(fetchBasketData())
        // dispatch(fetchVariant())
    }, [dispatch])
    if (!bestSellingProducts.length) {
        return <Loader />
    }

    const handleHeart = (e, product) => {
        e.stopPropagation();
        dispatch(addToFavorite(product))
    }


    return (
        <div className='best_selling_wrapper'>
            <div className="best_products">
                <p>Ən çox satılan məhsullar</p>
                <Link to={"/phones"} className='all_show'>Hamısına bax <FiChevronRight /> </Link>
            </div>
            <div className="products">
                {
                    bestSellingProducts.map((product) => {

                        return product.categories.map((category) => {

                            if (category.slug === "n-ox-satilan-m-hsullar") {
                                return <div className="card" key={product.id} onClick={() => showInfo(product.id)}>
                                    <div className="card_image">
                                        <img src={product.image.url} alt="item logo" />
                                    </div>
                                    <div className="item_info">
                                        <span className='name'>{product.name}</span>
                                        <span className='memory'>64 GB</span>
                                    </div>
                                    <div className="item_color">
                                        <p className='color'>Yellow</p>
                                    </div>
                                    <div className="item_price">
                                        <p className='price'>{product.price.formatted_with_code}</p>
                                        <AiFillHeart className="shopping" onClick={(e) => handleHeart(e, product)} />
                                    </div>
                                    <Toastify />
                                </div>
                            }
                        })
                    })
                }
            </div>

        </div>
    )
}

export default BestSelling;