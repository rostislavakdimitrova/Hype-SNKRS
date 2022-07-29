import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const Header = () => {
   
    const { user } = useContext(AuthContext);
    /*const showNavigation = () => (

        <div>
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-end">

                    <div className="col-12 col-lg-7">
                        <div className="top_single_area d-flex align-items-center">

                            <div className="top_logo">
                                <Link to="#"><img src="assets/img/my-logo.png" alt="" /></Link>
                            </div>

                            <div className="header-cart-menu d-flex align-items-center ml-auto">

                                <div className="wrap-icon-header flex-w flex-r-m">
                                    <Link to="#" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                        <i className="zmdi zmdi-search"></i>
                                    </Link>

                                    <Link to="#" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="0">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </Link>

                                    <Link to="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="main_header_area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 d-md-flex justify-content-between">


                            <div className="main-menu-area">
                                <nav className="navbar navbar-expand-lg align-items-start">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>
                                    <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                        <ul className="navbar-nav animated" id="nav">
                                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                                            <li className="nav-item dropdown">
                                
                                            <div className="dropdown-menu" aria-labelledby="karlDropdown">
                                            </div>
                                            </li>
                                                <li className="nav-item active"><Link to="/women" className="nav-link">Women</Link></li>
                                                <li className="nav-item active"><Link to="/men" className="nav-link">Men</Link></li>
                                                <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );*/

    return (
        <header id='header'>
            <div className="top-bar">
                <div className="content-topbar flex-sb-m h-full container">
                    <div className="left-top-bar">
                        Free shipping
                    </div>
                    <div className="help-line" id="color">
                        <span><i className="ti-headphone-alt"></i>  +34 657 3556 778</span>
                    </div>

                    <div className="right-top-bar flex-w h-full">
                    <Link to="/" className="flex-c-m trans-04 p-lr-25">
                                    <HomeIcon />
                                </Link>
                    {user.email 
                        ?   <div className="right-top-bar flex-w h-full">
                                
                                <Link to="/my-account" className="flex-c-m trans-04 p-lr-25">
                                    <PersonIcon />
                                        My Account
                                </Link>
                                <Link to="/logout" className="flex-c-m trans-04 p-lr-25">
                                    <LogoutIcon />
                                        Logout
                                </Link>
                            </div>
                        :  <div className="right-top-bar flex-w h-full"> 
                                <Link to="/signup" className="flex-c-m trans-04 p-lr-25">
                                    <i className='icon'><AppRegistrationIcon /></i>
                                         Signup
                                </Link>
                                <Link to="/signin" className="flex-c-m trans-04 p-lr-25">
                                    <i className="icon"><LoginIcon /></i>
                                         Signin
                                </Link>
                                
                            </div>
                    }
                    </div>
                </div>
            </div>
            {/*{showNavigation()}*/}
        </header>
    );
}

