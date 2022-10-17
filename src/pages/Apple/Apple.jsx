import React from 'react';
import "./_Apple.scss";
import Loader from "../../components/Loader/Loader";
import { fetchApple } from '../../store/reducers/actions/productsActions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";



const Apple = ({ showInfo }) => {

    const dispatch = useDispatch();
    const { appleProducts } = useSelector(state => state.products);

    const notify = () => {
        toast.success("Mehsul favorilere elave olundu")
    }

    useEffect(() => {
        dispatch(fetchApple())
    }, [dispatch]);

    if (!appleProducts.length) {
        return <Loader />
    }
    let count = 0;

    appleProducts.map((apple) => {
        return apple.categories.map((category) => {
            if (category.slug === "apple") {
                count++
            }
        })
    })

    const handleHeart = (e, product) => {
        notify()
        e.stopPropagation();
        console.log("yes");
        dispatch(addToFavorite(product))
    }

    return (
        <div className='apple_wrapper'>
            <div className="apple_count">
                <p>{count} məhsul tapıldı</p>
            </div>
            <div className="products">
                {
                    appleProducts.map((apple) => {
                        return apple.categories.map((category) => {
                            if (category.slug === "apple") {
                                return <div className="card" key={apple.id} onClick={() => showInfo(apple.id)}>
                                    <div className="card_image">
                                        <img src={apple.image.url} alt="item logo" />
                                    </div>
                                    <div className="item_info">
                                        <span className='name'>{apple.name}</span>
                                        <span className='memory'>64 GB</span>
                                    </div>
                                    <div className="item_color">
                                        <p className='color'>Yellow</p>
                                    </div>
                                    <div className="item_price">
                                        <p className='price'>{apple.price.formatted_with_code}</p>
                                        <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, apple)} />
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

export default Apple