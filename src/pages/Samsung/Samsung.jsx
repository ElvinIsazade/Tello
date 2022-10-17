import React, { useEffect } from 'react';
import "./_Samsung.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSamsung } from '../../store/reducers/actions/productsActions';
import Loader from "../../components/Loader/Loader";
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";


const Samsung = ({ showInfo }) => {

    const dispatch = useDispatch();
    const { samsungProducts } = useSelector(state => state.products);

    const notify = () => {
        toast.success("Mehsul favorilere elave olundu")
    }

    useEffect(() => {
        dispatch(fetchSamsung())
    }, [dispatch]);

    if (!samsungProducts.length) {
        return <Loader />
    }
    // console.log(samsungProducts);

    let count = 0;

    samsungProducts.map((samsung) => {
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
        <div className='Samsung_wrapper'>
            <div className="Samsung_count">
                <p>{count} məhsul tapıldı</p>
            </div>
            <div className="products">

                {
                    samsungProducts.map((samsung) => {
                        return samsung.categories.map((category) => {
                            if (category.slug === "samsung") {
                                return <div className="card" key={samsung.id} onClick={() => showInfo(samsung.id)}>
                                    <div className="card_image">
                                        <img src={samsung.image.url} alt="item logo" />
                                    </div>
                                    <div className="item_info">
                                        <span className='name'>{samsung.name}</span>
                                        <span className='memory'>64 GB</span>
                                    </div>
                                    <div className="item_color">
                                        <p className='color'>Yellow</p>
                                    </div>
                                    <div className="item_price">
                                        <p className='price'>{samsung.price.formatted_with_code}</p>
                                        <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, samsung)} />
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

export default Samsung