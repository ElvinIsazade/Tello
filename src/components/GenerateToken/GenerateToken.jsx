import React,{useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom'
import { commerce } from '../../helpers/Commerce';
import Loader from '../Loader/Loader';
function GenerateToken({ setISLogginIn}) {
    let navigate = useNavigate();
    let {token}  = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        commerce.customer.getToken(`${token}`, 'save= true' ).then((jwt) => {navigate("/order", { replace: true })});
        // setISLogginIn(true)
    }, [token, navigate])
    return (
        <div className='generateToken'>
            <Loader />
        </div>
    )
}
export default GenerateToken