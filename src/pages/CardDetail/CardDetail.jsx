import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import "./_CardDetail.scss";
import { useParams } from "react-router-dom";
import { addProductBasket} from '../../store/reducers/actions/basketActions';
import { useDispatch} from "react-redux";
import { useEffect } from 'react';
import { commerce } from '../../helpers/Commerce';
import { useState } from 'react';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import ReactImageMagnify from "react-image-magnify";


const CardDetail = () => {
  
  const params = useParams();

  const itemId = params.info;

  const [currentProduct, setCurrentProduct] = useState({})

  const [img, setImg] = useState(currentProduct?.image?.url)

  const handleHover = (image, i) => {
    setImg(image)
  }
  
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Mehsulunuz sebete elave olundu")
  }

  const getProductByID = async (productId) => {
    try {
      const response = commerce.products.retrieve(productId).then((product) => {
        setCurrentProduct(product);
        console.log(currentProduct)
      });

    } catch (error) {
      console.log("error " + error);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getProductByID(itemId);

  }, [itemId]);


  // let name;
  // let image;
  // let price;
  // let color;
  // let memory;
  // let id;




  // products.forEach((product)=>{
  //   if(product.id === itemId){
  //     name = product.name;
  //     image = product.image.url;
  //     price = product.price.formatted_with_code;
  //     id = product.id;
  //   }
  // })

  const [productCount, setProductCount] = useState(1)

  const handleDecCount = () => {
    if (productCount === 1) {
      setProductCount(1)
    } else {
      setProductCount(productCount - 1)
    }
  }

  const handleAscCount = () => {
    setProductCount(productCount + 1)
  }


  return (
    <div className='details_wrapper'>
      <div className="row" style={{ margin: "0px" }}>
        <div className="col-md-6">
          <div className="main_phone_image">
            <div className="left">
              <div className="left_2">
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: img === undefined ? currentProduct?.image?.url : img,
                    sizes: '(max-width: 480px) 200vw, (max-width: 1200px) 30vw, 360px'
                  },
                  largeImage: {
                    src: img === undefined ? currentProduct?.image?.url : img,
                    width: 1200,
                    height: 1800
                  },
                  // enlargedImageContainerDimensions: {
                  //   width: '200%',
                  //   height: '100%'
                  // }
                }} />
                {/* <img src={img === undefined ? currentProduct?.image?.url : img} alt="" /> */}
              </div>
              <div className="left_1">
                {
                  currentProduct?.assets?.map((image, i) => {
                    return <div className="img_wrap" key={i} onMouseOver={() => handleHover(image.url, i)}>
                      <img src={image.url} alt="" />
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="main_phone_about">
            <div className="phone_about_wrapper">
              <span className='phone_name'>{currentProduct?.name}</span>
              <span className='phone_memory'>{currentProduct?.variant_groups && currentProduct?.variant_groups[1]?.options[0]?.name}</span>
              <span className='phone_memory'>{currentProduct?.variant_groups && currentProduct?.variant_groups[0]?.options[0]?.name}</span>
              {/* <span className='phone_color'>{currentProduct?.variant_groups[0]?.options[0]?.name}</span> */}
            </div>
            <p className='phone_price'>{currentProduct?.price?.formatted_with_code}</p>
            <div className="phone_colors">
              Rəng:
              <span className='round_color_purple'></span>
              <span className='round_color_black'></span>
              <span className='round_color_gray'></span>
            </div>
            <div className="phone_quantity">
              <button className='item_count_minus' onClick={handleDecCount}>-</button>
              <span className='item_count'>{productCount}</span>
              <button className='item_count_plus' onClick={handleAscCount}>+</button>
            </div>
            <div className="button_card">
              <button className='add_item' onClick={() => {
                notify()
                dispatch(addProductBasket({ productId: currentProduct.id, quantity: productCount }))

              }}><FiShoppingCart /> Səbətə at</button>
            </div>
            <Toastify />
          </div>
        </div>
      </div>
      <div className="row technical_feature" style={{ margin: "0px" }}>
        <h1 className='phone_features'>Texniki Xüsusiyyətləri</h1>
        <div className="col-md-6">
          <h1 className='feature_title'>Əsas göstəricilər</h1>

          <div className="main_features">
            <p>İstehsalçı</p>
            <p>Apple</p>
          </div>


        </div>
        <div className="col-md-6">
          <h1 className='phone_info'>Məhsul haqqında</h1>
          <p className='phone_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lobortis mi blandit aliquet sed placerat. Gravida nunc adipiscing donec aliquet sit. Arcu diam eget sit nunc ac quisque morbi. Bibendum commodo eget ac nunc ut. Justo venenatis vitae, pellentesque accumsan. Maecenas sed rhoncus amet cursus venenatis, ipsum sollicitudin eget risus. Blandit vitae turpis eget arcu leo malesuada diam. At semper nunc orci, accumsan, fringilla aliquam. Turpis quam tortor nunc, est, sem nunc, lacus. Scelerisque adipiscing libero, cras eu, donec nibh. Lacus aliquet pellentesque morbi ullamcorper. Cursus tristique viverra et sed semper.</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail