import React from 'react';
import "../../sass/_variables.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Keyboard } from "swiper";
import phones_image_one from "../../img/phones.png";
import phones_image_two from "../../img/phones-2.png";
import phones_image_three from "../../img/phones-3.png";

import "./BuySell.scss";

const BuySell = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#2DD06E",
                }}
                grabCursor={true}
                slidesPerView={1}
                pagination={true}
                loop={true}
                modules={[Pagination, Autoplay, Keyboard]}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                keyboard={{
                    enabled: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="phones">
                        <div className="container">
                            <div className="buy_sell_wrapper">
                                <div className="row">
                                    <div className="col-md-6 add">
                                        <h1 className="main_header">Buy & Sell</h1>
                                        <h1 className="main_header_second">What`s Now & Next</h1>
                                        <p className="buy_sell_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, excepturi. Voluptate dolores ullam sed nemo?</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="example_phone">
                                            <img src={phones_image_one} alt="phones" className="phones_image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phones">
                        <div className="container">
                            <div className="buy_sell_wrapper">
                                <div className="row">
                                    <div className="col-md-6 add">
                                        <h1 className="main_header">Buy & Sell</h1>
                                        <h1 className="main_header_second">What`s Now & Next</h1>
                                        <p className="buy_sell_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, excepturi. Voluptate dolores ullam sed nemo?</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="example_phone">
                                            <img src={phones_image_two} alt="phones" className="phones_image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phones">
                        <div className="container">
                            <div className="buy_sell_wrapper">
                                <div className="row">
                                    <div className="col-md-6 add">
                                        <h1 className="main_header">Buy & Sell</h1>
                                        <h1 className="main_header_second">What`s Now & Next</h1>
                                        <p className="buy_sell_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, excepturi. Voluptate dolores ullam sed nemo?</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="example_phone">
                                            <img src={phones_image_three} alt="phones" className="phones_image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default BuySell;