import React from 'react';
import facebooklogin from "../../img/facebookwith.png";
import googlewith from "../../img/googlewith.png";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import undraw from "../../img/undraw.png";
import "./_Login.scss"
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';



const schema = yup.object().shape({
    email: yup.string().email("email duzgun yazilmalidir").required("email yazilmalidir"),
    password: yup.string().min(4).max(10).required("Sifre yazilmalidir")
})

const Login = ({ setISLogginIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const submitForm = async (data) => {
        console.log(data);
        // const response = await commerce.customer.login(data.email, "http://localhost:3000/generate-token")
        try {

            const url = new URL(
                "https://api.chec.io/v1/customers/email-token"
            );

            let headers = {
                "X-Authorization": "sk_470226eb3f62907a28f492eb17553df942d2842ae6705",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "email": data.email,
                "base_url": "http://localhost:3000/generate-token"
            }

            const response = await axios.post(url, body, { headers: headers });

        }
        catch (err) {
            console.log(err.message);
        }

    }


    return (
        <div className="container login_container">
            <div className="row login_row">
                <div className="col-md-6">
                    <div className="login_wrapper">
                        <h2>Daxil ol</h2>
                        <div className="login_with">
                            <img src={facebooklogin} alt="facebook logo" className='facebook_with' />
                            <img src={googlewith} alt="google logo" className='google_with' />
                        </div>
                        <p className='or'>və ya</p>
                        <form className='login' onSubmit={handleSubmit(submitForm)}>
                            <div className="email_wrapper">
                                <label htmlFor="email">E-mail</label> <br />
                                <input type="email" placeholder='nümunə@gmail.com' className='email_input' {...register("email")} />
                                <p className='error_message'>{errors.email?.message && "email duzgun yazilmalidir"}</p>
                            </div>
                            <div className="password_wrapper">
                                <label htmlFor="password">Şifrə</label> <br />
                                <input type={showPassword ? "text" : "password"} placeholder='Şifrənizi daxil edin' className='password_input' {...register("password")} />
                                <p className='error_message'>{errors.password?.message && "Sifre duzgun yazilmalidir"}</p>
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
                            <span>Hesabınız yoxdur? </span>
                            <Link to={"/register"}>
                                <button>Qeydiyyatdan keçin</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login