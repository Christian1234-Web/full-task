import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import {Store} from '../context/store'


// import formatCurrency from 'format-currency'


function Navbar() {
    let store = useContext(Store);
    let [cart, setCart] = store.ctx;


    return (
        <>
            <main>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid cakenav">
                        <a className="navbar-brand text-white" href="#">MrCake</a>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{bsScrollHeight:" 100px"}} id='cakeli'
                            >
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul className="dropdown-menu text-dark" aria-labelledby="navbarScrollingDropdown">
                                        <li><Link to='/admin/login' className="dropdown-item text-dark">admin</Link></li>
                                        <li><a className="dropdown-item text-dark" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider " /></li>
                                        <li><a className="dropdown-item text-dark" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2 w-" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav me-auto my-2 my-lg-0 nav_two  m-sm-1">
                            <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/login">Signup/Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart">
                                        <i className="bi bi-cart text-white" id=''></i>
                                        <i className=" text-danger" >{cart.length}</i>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </main>
            </>
    )
}
export default Navbar;