import React, { useState, useEffect } from 'react';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./_Phones.scss";
import { fetchProducts } from '../../store/reducers/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import ReactPaginate from "react-paginate";
import { fetchPageData } from "../../store/reducers/actions/pageActions";
import { addToFavorite } from '../../store/reducers/favoriteReducer';
import { AiFillHeart } from "react-icons/ai";
import { getCategoryList } from '../../store/reducers/actions/categoryListActions';
import { toast } from "react-toastify";
import Toastify from '../../components/Toastify/Toastify';
import { commerce } from '../../helpers/Commerce';
import CheckBox from '../../components/CheckBox/CheckBox';


const Phones = ({ showInfo }) => {
    const [showCategory, setShowCategory] = useState(false);
    const [showdecPrice, setDecPrice] = useState(false);
    const [checked,setChecked] = useState(false)

    const { pageProducts } = useSelector((state) => state.page);

    const { listProducts } = useSelector(state => state.category)
    // console.log(listProducts);

    const dispatch = useDispatch();

    const notify = () => {
        toast.success("Mehsul favorilere elave olundu")
    }

    useEffect(() => {
        dispatch(fetchPageData())
        dispatch(getCategoryList())
    }, [dispatch])


    const showPrice = () => {
        setDecPrice(prevState => !prevState);
    }
    const showType = () => {
        setShowCategory(prevState => !prevState)
    }

    let { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let count = 0;

    pageProducts.map((product) => {
        count++
    })



    if (!pageProducts.length) {
        return <Loader />
    }

    const handleHeart = (e, product) => {
        notify()
        e.stopPropagation();
        dispatch(addToFavorite(product))
    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        dispatch(fetchPageData(currentPage))
    }
    

    const handleToggle = async(e)=> {
        commerce.products.list({
            category_slug: [e.target.name],
        }).then(response => console.log(response.data))
        const response = await commerce.products.list({
            category_slug : [e.target.name],
        })
        const data = response.data;
        console.log(data);
        
    }
    
    
    
    
    // console.log(listProducts);

    return (
        <>

            <div className='phones_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                            <div className="category">
                                <div className="accordion">
                                    <div className="accordion_item">
                                        <div className="accordion_title" onClick={showType}>
                                            <h4 className='brend'>Category (3)</h4>
                                            {showCategory ? <AiOutlineMinus className='minus' /> : <AiOutlinePlus className='plus' />}
                                        </div>
                                        {
                                            <div className={`accordion_content ${showCategory ? "active" : null}`}>
                                                
                                                {
                                                    listProducts?.map(data => {
                                                        if (data.slug === "telefonlar") {
                                                            return data.children.map(child => {
                                                                // console.log(child);
                                                                return <div className="apple_check" key={child.id}>
                                                                    <input type="checkbox"
                                                                        name={child.slug}
                                                                        id={child.id}
                                                                        onChange={(e)=>handleToggle(e)}

                                                                    />
                                                                    <label className='apple_text' htmlFor="apple">{child.slug}</label>
                                                                </div>
                                                            })
                                                        }
                                                    })
                                                }

                                            </div>
                                        }
                                    </div>

                                    <div className="accordion_item" onClick={showPrice}>
                                        <div className="accordion_title">
                                            <h4 className='brend'>Qiymət (3)</h4>
                                            <AiOutlinePlus className='plus' />
                                        </div>
                                        {
                                            <div className={`accordion_content ${showdecPrice ? "active" : null}`}>
                                                <div className="expensive_item">
                                                    <input type="checkbox" name="expensive" id="expensive" />
                                                    <label htmlFor="expensive" className='expensive'>Expensive</label>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="phone_count">
                                <p>{count} məhsul tapıldı</p>
                            </div>
                            <div className="products">

                                {
                                    pageProducts.map((product) => {
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
                    </div>
                </div>
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                marginPagesDisplayed={3}
                pageCount={Math.ceil(products.length / 12)}
                previousLabel="<"
                containerClassName='paginate_wrapper'
                pageClassName='paginate_list'
                pageLinkClassName='paginate_link'
                previousClassName='paginate_list'
                previousLinkClassName='paginate_link'
                nextClassName='paginate_list'
                nextLinkClassName='paginate_link'
                breakLinkClassName='paginate_link'
                activeClassName='paginate_active'
            />
        </>
    )
}

export default Phones;