import React from 'react';
import "./_Footer.scss";
import logo from "../../img/Tello logo.png";
import {FaInstagram} from "react-icons/fa";
import {AiOutlineYoutube} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {FiMail} from "react-icons/fi";
import {BsTelephone} from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="line">
                            <div className="logo">
                                <img src={logo} alt="Tello logo" className='logo_image' />
                                <p className='logo_text'>Tello</p>
                            </div>
                            <ul className='social'>
                                <li className='social_item'>
                                    <a href="!#" className='social_link'><FaInstagram /></a>
                                </li>
                                <li className='social_item'>
                                    <a href="!#" className='social_link'><FiFacebook /></a>
                                </li>
                                <li className='social_item'>
                                    <a href="!#" className='social_link'><AiOutlineYoutube /></a>
                                </li>
                                <li className='social_item'>
                                    <a href="!#" className='social_link'><FiTwitter /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="line">
                            <h4 className='menu_title'>Menu</h4>
                            <ul className='menu_list'>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>Yeni</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>Endiriml??r</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>Aksessuarlar</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>B??t??n brendl??r</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="line">
                            <h4 className='menu_title'>K??m??k</h4>
                            <ul className='menu_list'>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>Tez-tez soru??ulan suallar</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>??atd??r??lma xidm??ti</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'>Geri qaytar??lma ????rtl??ri</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="line">
                            <h4 className='menu_title'>??laq??</h4>
                            <ul className='menu_list'>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'> <IoLocationOutline /> M. K. Ataturk avenue 89, Baku, Azerbaijan</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'><FiMail /> example@gmail.com</a>
                                </li>
                                <li className='menu_item'>
                                    <a href="!#" className='menu_link'> <BsTelephone />*2108</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                        <div className="copy">
                            <div className="col-md-4">
                                <p className='law'>?? PeojectX 2021. B??t??n h??quqlar qorunur.</p> 

                            </div>
                            <div className="col-md-4">
                                <p className='rules'>
                                    <span>Qaydalar v?? ????rtl??r</span>
                                    <span>M??xfilik siyas??ti</span>
                                </p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer