import React, { useState, useEffect } from 'react';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./_AllWatches.scss";
import { fetchProducts } from '../../store/reducers/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";


const AllWatches = ({ showInfo }) => {
    const [showCategory, setShowCategory] = useState(false);
    const [showdecPrice, setDecPrice] = useState(false);

    const showPrice = () => {
        setDecPrice(prevState => !prevState);
    }
    const showType = () => {
        setShowCategory(prevState => !prevState)
    }

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)

    const notify = () => {
        toast.success("Mehsul favorilere elave olundu")
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let count = 0;
    console.log(products);

    products.map((product) => {
        return product.categories.map((category) => {
            if (category.slug === "smart-saat") {
                count++
            }
        })
    })



    if (!products.length) {
        return <Loader />
    }

    const handleHeart = (e, product) => {
        notify()
        e.stopPropagation();
        console.log("yes");
        dispatch(addToFavorite(product))
    }


    return (
        <div className='AllWatches_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="category">
                            <div className="accordion">
                                <div className="accordion_item">
                                    <div className="accordion_title" onClick={showType}>
                                        <h4 className='brend'>Brend (3)</h4>
                                        {showCategory ? <AiOutlineMinus className='minus' /> : <AiOutlinePlus className='plus' />}
                                    </div>
                                    {
                                        showCategory ? <div className="accordion_content active">
                                            <div className="apple_check">
                                                <input type="checkbox" name="apple" id="apple" />
                                                <label className='apple_text' htmlFor="apple">Xiaomi</label>
                                            </div>
                                            <div className="samsung_check">
                                                <input type="checkbox" name="samsung" id="samsung" />
                                                <label className='samsung_text' htmlFor="samsung">Samsung</label>
                                            </div>
                                            <div className="xiaomi_check">
                                                <input type="checkbox" name="xiaomi" id="xiaomi" />
                                                <label htmlFor="xiaomi" className='xiaomi_text'>Huawei</label>
                                            </div>
                                        </div> : <div className="accordion_content">
                                            <div className="apple_check">
                                                <input type="checkbox" name="apple" id="apple" />
                                                <label className='apple_text' htmlFor="apple">Xiaomi</label>
                                            </div>
                                            <div className="samsung_check">
                                                <input type="checkbox" name="samsung" id="samsung" />
                                                <label className='samsung_text' htmlFor="samsung">Samsung</label>
                                            </div>
                                            <div className="xiaomi_check">
                                                <input type="checkbox" name="xiaomi" id="xiaomi" />
                                                <label htmlFor="xiaomi" className='xiaomi_text'>Huawei</label>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="accordion_item" onClick={showPrice}>
                                    <div className="accordion_title">
                                        <h4 className='brend'>Qiymət (3)</h4>
                                        <AiOutlinePlus className='plus' />
                                    </div>
                                    {
                                        showdecPrice ? <div className="accordion_content active">
                                            <div className="expensive_item">
                                                <input type="checkbox" name="expensive" id="expensive" />
                                                <label htmlFor="expensive" className='expensive'>Expensive</label>
                                            </div>
                                        </div> : <div className="accordion_content">
                                            <div className="expensive_item">
                                                <input type="checkbox" name="expensive" id="expensive" />
                                                <label htmlFor="expensive" className='expensive'>Expensive</label>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="phone_count">
                            <p>{count} məhsul tapıldı</p>
                        </div>
                        <div className="products">
                            {
                                products.map((product) => {
                                    return product.categories.map((category) => {
                                        if (category.slug === "smart-saat") {
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
                                                    <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, product)} />
                                                </div>
                                                <Toastify />
                                            </div>
                                        }
                                    })
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllWatches;