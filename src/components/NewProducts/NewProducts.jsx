import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import "./_NewProducts.scss";
import { newProducts } from '../../store/reducers/actions/productsActions';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";


const NewProducts = ({ showInfo }) => {
  const dispatch = useDispatch();
  const { newProduct } = useSelector(state => state.products);

  const notify = () => {
    toast.success("Mehsul favorilere elave olundu")
  }

  useEffect(() => {
    dispatch(newProducts())
  }, [dispatch])

  const handleHeart = (e, product) => {
    notify()
    e.stopPropagation();
    console.log("yes");
    dispatch(addToFavorite(product))
  }

  if (!newProduct.length) {
    return <Loader />
  }

  return (
    <div className='new_selling_wrapper'>
      <div className="best_products">
        <p>Yeni gələn məhsullarr</p>
        <Link to={"/phones"} className='all_show'>Hamısına bax <FiChevronRight /> </Link>
      </div>
      <div className="products">
        {
          newProduct.map(product => {
            return <div className="card" key={product.id} onClick={() => showInfo(product.id)}>
              <div className="card_image">
                <img src={product.image.url} alt="item logo" />
              </div>
              <div className="item_info">
                <span className='name'>{product.name}</span>
                <span className='memory'>64 GB</span>
              </div>
              <div className="item_color">
                <p className='color'>Yellow</p>
              </div>
              <div className="item_price">
                <p className='price'>{product.price.formatted_with_code}</p>
                <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, product)} />
              </div>
              <Toastify />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default NewProducts;