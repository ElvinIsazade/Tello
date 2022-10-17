import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import "./_NewAccessories.scss";
import { newAccessories } from '../../store/reducers/actions/productsActions';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { toast } from "react-toastify";
import Toastify from '../Toastify/Toastify';
import { AiFillHeart } from "react-icons/ai";



const NewAccessories = ({ showInfo }) => {

  const dispatch = useDispatch();
  const { newAccessory } = useSelector(state => state.products);
  const notify = () => {
    toast.success("Mehsul favorilere elave olundu")
  }

  useEffect(() => {
    dispatch(newAccessories())
  }, [dispatch])

  // console.log(newAccessory);
  const handleHeart = (e, product) => {
    notify()
    e.stopPropagation();
    console.log("yes");
    dispatch(addToFavorite(product))
  }

  if (!newAccessory.length) {
    <Loader />
  }
  return (
    <div className='new_selling_wrapper'>
      <div className="accessories_products">
        <p>Yeni gələn aksessuarlar</p>
        <Link to={"/phones"} className='all_show'>Hamısına bax <FiChevronRight /> </Link>
      </div>
      <div className="products">

        {
          newAccessory.map((accessory) => {
            return accessory.categories.map(category => {
              if (category.slug === "aksesuar") {
                return <div className="card" key={accessory.id} onClick={() => showInfo(accessory.id)}>
                  <div className="card_image">
                    <img src={accessory.image.url} alt="item logo" />
                  </div>
                  <div className="item_info">
                    <span className='name'>{accessory.name}</span>
                    <span className='memory'>64 GB</span>
                  </div>
                  <div className="item_color">
                    <p className='color'>Yellow</p>
                  </div>
                  <div className="item_price">
                    <p className='price'>{accessory.price.formatted_with_code}</p>
                    <AiFillHeart className='shopping' onClick={(e) => handleHeart(e, accessory)} />
                  </div>
                  <Toastify />
                </div>
              }
            })
          })
        }
      </div>
    </div>
  )
}

export default NewAccessories;