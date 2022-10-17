import React from 'react';
import "./_Deliver.scss";
import box from "../../img/box.png";
import medal from "../../img/medal-star.png";
import card from "../../img/card-pos.png";

const Deliver = () => {
    return (
        <div className='container'>
            <div className="row cube_wrapper">
                <div className="col-md-4">
                    <div className="cube">
                        <img src={box} alt="box" />
                        <p>Çatdırılma</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cube">
                        <img src={card} alt="cart" />
                        <p>Kredit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cube">
                        <img src={medal} alt="star" />
                        <p>Zəmanət</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deliver