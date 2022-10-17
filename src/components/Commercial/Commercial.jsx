import React from 'react';
import "./_Commercial.scss";
import { FaApple } from "react-icons/fa";
import iphone_one from "../../img/Iphone-13-midnight.png";
import iphone_two from "../../img/Iphone-13-pro-max-sierra-blue.png";

const Commercial = () => {
    return (
        <div className='commercial_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="commercial_first">
                            <div className="commercial_info">
                                <h2 className='need'>Iphone 11.Rəngli Güclü, Əsl sizə lazim olan</h2>
                                <p className='commercial_price'>1519 Azn</p>
                                <p className='percent'>Faizsiz taksitlə 127 Azn-dən</p>
                                <button className='buy'>İndi alin</button>
                            </div>
                            <div className="commercial_image">
                                <img src={iphone_one} alt="iphone 12" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commercial_second">
                            <div className="commercial_info_second">
                                <h2 className='apple'><FaApple /> AirTag</h2>
                                <h2 className='find'>Əşyalarinizi tampagin super supüer asan yolu</h2>
                                <p className='money'><span>79</span> Azn -dən</p>
                                <button className='buy_now'>İndi alin</button>
                            </div>
                            <div className="commercial_image_second">
                                <img src={iphone_two} alt="iphone 13" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commercial