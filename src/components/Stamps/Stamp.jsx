import React from 'react';
import toshiba from "../../img/Toshiba.png";
import amazon from "../../img/amazon.jpg";
import beko from "../../img/Beko.png";
import bosch from "../../img/Bosch.png";
import electrolux from "../../img/Electrolux.png";
import hp from "../../img/Hp.png";
import philips from "../../img/Philips.png";
import gorenge from "../../img/Gorenge.png";
import mitsubishi from "../../img/Mitsubishi.png";
import hyundai from "../../img/Hyudai.png";
import etihad from "../../img/Etihad-airways.png";
import mercedes from "../../img/Mercedes.jpg";
import heinkeen from "../../img/Heinkeen.png";
import huawei from "../../img/Huawei.jpg";
import "./_Stamp.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Keyboard } from "swiper";




const Stamp = () => {
    return (

        <div className="stamp_wrapper">
            <div className="container">
                <div className="row" style={{ height: "150px" }}>
                    <Swiper

                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            576: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 6
                            }
                        }}
                        style={{
                            "--swiper-pagination-color": "#2DD06E",
                        }}
                        grabCursor={true}
                        spaceBetween={30}
                        slidesPerView={7}
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

                            <div className="stamp_image">
                                <img src={toshiba} alt="toshiba logo" className="image" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={philips} alt="philips logo" className="image" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={hp} alt="hp logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={electrolux} alt="electrolux logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={gorenge} alt="gorenge logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={bosch} alt="bosch logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={beko} alt="beko logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={amazon} alt="amazon logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={mitsubishi} alt="mitsubishi logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={hyundai} alt="hyundai logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={heinkeen} alt="heinkeen logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={huawei} alt="huawei logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={mercedes} alt="mercedes logo" className="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="stamp_image">
                                <img src={etihad} alt="etihad airways logo" className="image" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div >

    )
}

export default Stamp