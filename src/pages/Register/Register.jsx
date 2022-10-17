import React, { useState } from 'react'
import facebooklogin from "../../img/facebookwith.png";
import googlewith from "../../img/googlewith.png";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import undraw from "../../img/undraw.png";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { commerce } from '../../helpers/Commerce';
import { useEffect } from 'react';
import { registerFormAction } from '../../store/reducers/actions/userActions';
import { useDispatch } from "react-redux";
import axios from 'axios';



const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(10).required()
})

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }
    const dispatch = useDispatch()


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const registerForm = async (data) => {
        // console.log(data);
        // const response = await commerce.customer.login(data.email, "http://localhost:3000/")
        // console.log(response.data);
        // console.log(data.email);
        dispatch(registerFormAction({ email: data.email, firstName: data.firstName, password: data.password, phone: String(data.phone) }))
    }


    return (
        <div className="container login_container">
            <div className="row login_row">
                <div className="col-md-6">
                    <div className="login_wrapper">
                        <h2>Qeydiyyat</h2>
                        <div className="login_with">
                            <img src={facebooklogin} alt="facebook logo" className='facebook_with' />
                            <img src={googlewith} alt="google logo" className='google_with' />
                        </div>
                        <p className='or'>və ya</p>
                        <form className='login' onSubmit={handleSubmit(registerForm)}>
                            <div className="email_wrapper">
                                <label htmlFor="text">Ad, Soyad</label> <br />
                                <input type="text"
                                    placeholder='Ad və soyadınızı daxil edin'
                                    className='email_input'
                                    {...register("firstName")}
                                />
                                <p className='error_message'>{errors.firstName?.message && "ad soyad daxil edilmelidir"}</p>
                            </div>
                            <div className="email_wrapper">
                                <label htmlFor="email">E-mail</label> <br />
                                <input type="email" placeholder='nümunə@gmail.com' className='email_input'
                                    {...register("email")}
                                />
                                <p className='error_message'>{errors.email?.message && "email duzgun daxil edilmelidir"}</p>
                            </div>
                            <div className="email_wrapper">
                                <label htmlFor="phone">Mobil nomre</label> <br />
                                <input type="tel" placeholder='077-000 - 00 - 00' className='email_input'
                                    {...register("phone")}
                                />
                                <p className='error_message'>{errors.phone?.message && "telefon duzgun daxil edilmelidir"}</p>
                            </div>
                            <div className="password_wrapper">
                                <label htmlFor="password">Sifre</label> <br />
                                <input type={showPassword ? "text" : "password"} placeholder='Şifrənizi daxil edin' className='password_input'
                                    {...register("password")}

                                />
                                <p className='error_message'>{errors.password?.message && "sifre duzgun daxil edilmelidir"}</p>

                                <div className='eye'>
                                    {showPassword ? <div className='eye_button' onClick={handleShowPassword}><AiFillEyeInvisible /></div> : <div className='eye_button' onClick={handleShowPassword}><AiFillEye /></div>}
                                </div>
                            </div>
                            <div className="enter_user">
                                <button className='enter'>Daxil ol</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="person_image">
                        <div className="person">
                            <img src={undraw} alt="person" />
                        </div>
                        <div className="enroll">
                            <span>Artıq hesabınız var?  </span>
                            <Link to={"/login"}>
                                <button>Daxil olun </button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register