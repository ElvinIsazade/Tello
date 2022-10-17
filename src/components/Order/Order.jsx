import React from 'react';
import {FiLogOut, FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import iphone from "../../img/phones-2.png";
import "./_Order.scss";
import { commerce } from '../../helpers/Commerce';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Order = ({ setISLogginIn }) => {

    const logout = () => {
        commerce.customer.logout()
    }

    return (
        <div style={{ backgroundColor: "#f7f7f7", padding: "50px 0px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile_sidebar">
                            <h2>Profilim</h2>
                            <button><FiShoppingCart /> Sifarişlərim</button>
                            <Link to={"/favorites"}>
                                <button><AiOutlineHeart /> Favorilərim</button>
                            </Link>
                            <Link to={"/login"} onClick={logout}>
                                <button><FiLogOut /> Çıxış</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="order_list">
                            <div className="order_title">
                                <h1>Sifarişlərim (4 məhsul)</h1>
                            </div>
                            <div className="order_body">
                                <div className="order_product">
                                    <div className="order_image">
                                        <img src={iphone} alt="iphone" />
                                    </div>
                                    <div className="order_detail">
                                        <p>Sifariş tarixi:</p>
                                        <span className='order_date'>12.04.2020</span>
                                        <p>Status:</p>
                                        <span className='order_road'>Yoldadır</span>
                                        <p>Ümumi məbləğ:</p>
                                        <span className='order_red'>240 AZN</span>
                                        <div className="order_button">
                                            <button>Sifarişin detalları</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_product">
                                    <div className="order_image">
                                        <img src={iphone} alt="iphone" />
                                    </div>
                                    <div className="order_detail">
                                        <p>Sifariş tarixi:</p>
                                        <span className='order_date'>12.04.2020</span>
                                        <p>Status:</p>
                                        <span className='order_road'>Yoldadır</span>
                                        <p>Ümumi məbləğ:</p>
                                        <span className='order_red'>240 AZN</span>
                                        <div className="order_button">
                                            <button>Sifarişin detalları</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_product">
                                    <div className="order_image">
                                        <img src={iphone} alt="iphone" />
                                    </div>
                                    <div className="order_detail">
                                        <p>Sifariş tarixi:</p>
                                        <span className='order_date'>12.04.2020</span>
                                        <p>Status:</p>
                                        <span className='order_road'>Yoldadır</span>
                                        <p>Ümumi məbləğ:</p>
                                        <span className='order_red'>240 AZN</span>
                                        <div className="order_button">
                                            <button>Sifarişin detalları</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_product">
                                    <div className="order_image">
                                        <img src={iphone} alt="iphone" />
                                    </div>
                                    <div className="order_detail">
                                        <p>Sifariş tarixi:</p>
                                        <span className='order_date'>12.04.2020</span>
                                        <p>Status:</p>
                                        <span className='order_road'>Yoldadır</span>
                                        <p>Ümumi məbləğ:</p>
                                        <span className='order_red'>240 AZN</span>
                                        <div className="order_button">
                                            <button>Sifarişin detalları</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order