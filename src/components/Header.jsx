import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'
import TLW from '../assets/images/tlw.png'
import {auth} from "../components/Firebase"

function Header() {
    const [{basket,loggedinuser}, dispatch] = useStateValue();
    
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    return (
        <div>
            <nav className="header">
                <img className="header__logo" alt="logo" src={TLW}/>
                <div className="header__search">
                    <input type="search" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    {/*1st link*/}
                <Link to={!loggedinuser && "/login"} className="header__link">
                <div onClick={logoutUser} className="header__option">
                <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                <span className="header__optionLineTwo">{loggedinuser ? "Sign out" : "Sign in"}</span>
                </div>
                </Link>
                {/*2nd link*/}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                {/*basketIcon with number of items*/}
                <Link to="checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
