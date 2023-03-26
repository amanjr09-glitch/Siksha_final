import React from 'react';
// import "../styles/css/bootstrap.min.css"
// import "../styles/css/style.css"
// import './index.css'

const Navbar = () => {
    return <header className="header-section header-normal">
        <div className="top-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="tn-left">
                            <li><i className="fa fa-phone"></i> 8390414007</li>
                            <li><i className="fa fa-envelope"></i> info.collegesearch@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="tn-right">
                            <div className="top-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className=""></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                            <a href="./Signup" className="bk-btn">SignUp</a>
                            <div className="language-option">
                                <img src="img/flag.jpg" alt=""/>
                                    <span>EN <i className="fa fa-angle-down"></i></span>
                                    <div className="flag-dropdown">
                                        <ul>
                                            <li><a href="#">Zi</a></li>
                                            <li><a href="#">Fr</a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <a href="./index">
                                <h5>College Search</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="nav-menu">
                            <nav className="mainmenu">
                                <ul>
                                    <li className="active"><a href="./index">Home</a></li>
                                    <li><a href="/">B.Tech</a>
                                        <ul className="dropdown">
                                            
                                        </ul>
                                    </li>
                                    <li><a href="/">MBA</a>
                                        <ul className="dropdown">
                                            <li><a href="/">Mumbai</a></li>
                                            <li><a href="/">Delhi</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Medical</a>
                                        <ul className="dropdown">
                                            <li><a href="/">Mumbai</a></li>
                                            <li><a href="/">Delhi</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Agriculture</a>
                                        <ul className="dropdown">
                                            <li><a href="/">Mumbai</a></li>
                                            <li><a href="/">Delhi</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="nav-right search-switch">
                                <i className="icon_search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
};

export default Navbar;
