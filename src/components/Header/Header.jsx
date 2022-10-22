import React from 'react';
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../img/Tello logo.png";
import "./_Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBasketData } from '../../store/reducers/actions/basketActions';
import { useState } from 'react';
import { fetchProducts } from "../../store/reducers/actions/productsActions";
import Loader from "../../components/Loader/Loader";
import { commerce } from '../../helpers/Commerce';



// {badge}
const Header = ({ showInfo, isLoggedIn, setISLogginIn }) => {
    const [value, setValue] = useState("");
    const [active, setActive] = useState(false);
    const [appear, setAppear] = useState(false);


    const { basketData } = useSelector(state => state.basket);
    const { products, loading } = useSelector(state => state.products)
    const { favoriteProducts } = useSelector(state => state.favorite)



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBasketData())
    }, [dispatch])

    useEffect(() => {
        if (value.length > 0) {
            dispatch(fetchProducts());
        } else {
            return
        }
    }, [dispatch, value])

    useEffect(() => {
        const closeList = (e) => {
            if (e.path[1].className !== "search_wrapper" && e.path[1].className !== "search_product_list_wrapper") {
                setActive(false)
            }
        }
        document.body.addEventListener("click", closeList)

        return () => {
            document.body.removeEventListener("click", closeList)
        }

    }, [])

    const handleShow = (id, name) => {

        showInfo(id);
        setActive(false);
        setValue(name);
    }
    const toggleMenu = () => {
        setAppear(prevState => !prevState)
    }

    const isNullOrWhiteSpace = (str) => {
        return str === null || str.match(/^ *$/) !== null;
    }

    const handleValueChange = (e) => {
        if (!isNullOrWhiteSpace(e.target.value.trim())) {
            setValue(e.target.value);
        } else {
            setValue("");
        }
    };

    const openList = () => {
        setActive(true);
    }
    const [categories, setCategories] = useState([])
    const categoryList = async () => {
        try {
            const response = await commerce.categories.list()
            setCategories(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        categoryList()
    }, [])

    return (

        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="hamburger">
                        <button className='menu_button' onClick={toggleMenu}><AiOutlineMenu /></button>
                    </div>
                    <div className="col-sm-3 col-8">
                        <Link to={"/"} style={{ textDecoration: "none", }}>
                            <div className="logo">
                                <img src={logo} alt="Tello logo" className="commerce_logo" />
                                <p className="logo_text">Tello</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 search_layout">
                        <form className="search_wrapper">
                            <FiSearch className="search_icon" />
                            <input value={value} type="text" placeholder='Search...' className="search_input" onChange={(e) => handleValueChange(e)} onClick={openList} />

                            {

                                active ? <ul className='search_product_list_wrapper'>

                                    {
                                        loading ? <Loader /> : products.filter((product) => {
                                            return product.name.toLowerCase().indexOf(value.toLowerCase()) > -1
                                        }).map((item) => {
                                            return <li className='search_product_list' key={item.id} onClick={() => handleShow(item.id, item.name)}>
                                                <img src={item.image.url} alt="tello items" className='item_picture' />
                                                <p className='item_name'>{item.name}</p>
                                                <p className='item_price'>{item.price.formatted_with_code}</p>
                                            </li>
                                        })
                                    }

                                    {/* {
                                    loading ? <Loader /> : data.map((item) => {
                                        return <li key={item.id} className='search_product_list'>
                                            <img src={item.image.url} alt="tello items" className='item_picture' />
                                            <p className='item_name'>{item.name}</p>
                                            <p className='item_price'>{item.price.formatted_with_code}</p>
                                        </li>
                                    })
                                } */}
                                </ul> : null
                            }
                        </form>
                    </div>
                    <div className="col-3">
                        <div className="icon_wrapper">
                            <div className="user">
                                {
                                    isLoggedIn ? <Link to={"/order"} style={{ color: "rgba(0, 0, 0, 0.6)" }}><BiUser /></Link> : <Link to={"/login"} style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                                        <BiUser />
                                    </Link>
                                }
                            </div>
                            <div className="heart">
                                <Link to={"/favorites"} style={{ color: "#00000099", textDecoration: "none" }}>
                                    <AiOutlineHeart />
                                    {!favoriteProducts.length ? <span className='heart_count'>0</span> : <span className='heart_count'>{favoriteProducts.length}</span>}
                                </Link>
                            </div>
                            <Link to={"/cart"} style={{ color: "#00000099" }}>
                                <div className="shopping">
                                    <FiShoppingCart />
                                    <span className="badge">{basketData.total_items}</span>
                                    {/* {badge} */}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="choices">
                            <ul className={`choices_list ${appear ? "active" : null}`}>
                                <li className="item" onClick={toggleMenu}>
                                    <Link to={"/phones"} className="choice_link">Butun məhsullar</Link>
                                </li>
                                <li className="item" onClick={toggleMenu}>
                                    <Link to={"/apple"} className="choice_link">Apple</Link>
                                </li>
                                <li className="item" onClick={toggleMenu}>
                                    <Link to={"/samsung"} className="choice_link">Samsung</Link>
                                </li>
                                <li className="item" onClick={toggleMenu}>
                                    <Link to={"/xiaomi"} className="choice_link">Xiaomi</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header