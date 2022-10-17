import React, { useEffect } from 'react';
import "./_Xiaomi.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchXiaomi } from '../../store/reducers/actions/productsActions';
import Loader from "../../components/Loader/Loader";
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";


const Xiaomi = ({ showInfo }) => {

    const dispatch = useDispatch();
    const { xiaomiProducts } = useSelector(state => state.products);

    const notify = () => {
        toast.success("Mehsul favorilere elave olundu")
    }

    useEffect(() => {
        dispatch(fetchXiaomi())
    }, [dispatch]);

    if (!xiaomiProducts.length) {
        return <Loader />
    }

    let count = 0;

    xiaomiProducts.map((samsung) => {
        return samsung.categories.map((category) => {
            if (category.slug === "samsung") {
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
        <div className='Xiaomi_wrapper'>
            <div className="Xiaomi_count">
                <p>{count} məhsul tapıldı</p>
            </div>
            <div className="products">
                {
                    xiaomiProducts.map((xiaomi) => {
                        return xiaomi.categories.map((category) => {
                            if (category.slug === "xiaomi") {
                                return <div className="card" key={xiaomi.id} onClick={() => showInfo(xiaomi.id)}>
                                    <div className="card_image">
                                        <img src={xiaomi.image.url} alt="item logo" />
                                    </div>
                                    <div className="item_info">
                                        <span className='name'>{xiaomi.name}</span>
                                        <span className='memory'>64 GB</span>
                                    </div>
                                    <div className="item_color">
                                        <p className='color'>Yellow</p>
                                    </div>
                                    <div className="item_price">
                                        <p className='price'>{xiaomi.price.formatted_with_code}</p>
                                        <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, xiaomi)} />
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

export default Xiaomi