import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-7" to="/">
                        Collection
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active " aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>           
                        </ul>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
