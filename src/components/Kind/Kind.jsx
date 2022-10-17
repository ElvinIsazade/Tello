import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import phones from "../../img/phone-products.png";
import accesories from "../../img/Accessories.png";
import watches from "../../img/watches.png";
import "./_Kind.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/reducers/actions/productsActions';

const Kind = () => {
    
    const dispatch = useDispatch()

    const { products } = useSelector(state => state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    let countPhones=0;
    let countWatches=0;
    let countAccessories=0;
    
    products.map((product) => {
        return product.categories.map(((category) => {
            if (category.slug === "telefonlar") {
                countPhones++
            } else if (category.slug === "smart-saat") {
                countWatches++

            } else if (category.slug === "aksesuar") {
                countAccessories++
            }
        }))
    })

    return (
        <div>
            <div className="container">
                <div className="row" style={{ padding: "30px 0px" }}>
                    <div className="col-md-6 head_back">
                        <div className="product_name">
                            <h3>Telefon</h3>
                            <p>Məhsul sayı: {countPhones}</p>
                            <Link to={"/allProducts"} className='product_link'>Məhsullara keçid <FiChevronRight /></Link>
                        </div>
                        <div className="product_image">
                            <img src={phones} alt="phones" />
                        </div>
                    </div>
                    <div className="col-md-6 watches_back">
                        <div className="watches">
                            <div className="product_name">

                                <h3>Smart saat</h3>
                                <p>Məhsul sayı: {countWatches}</p>
                                <Link to={"/watches"} className='product_link'>Məhsullara keçid <FiChevronRight /></Link>
                            </div>
                            <img src={watches} alt="watches" className='watches_image' />
                        </div>
                        <div className="accessories">
                            <div className="product_name">
                                <h3>Aksesuar</h3>
                                <p>Məhsul sayı: {countAccessories}</p>
                                <Link to={"/accessories"} className='product_link'>Məhsullara keçid <FiChevronRight /></Link>
                            </div>
                            <img src={accesories} alt="accessories" className='accessories_image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kind