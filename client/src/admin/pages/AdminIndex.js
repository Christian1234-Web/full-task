import React, { useRef, useState, useContext, useEffect } from 'react';
import { Store } from '../../context/store';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from '../adminComponents/Header'
import AdminBanner from '../adminComponents/AdminBanner'
import ViewProduct from '../adminComponents/ViewProduct';
import CreateProduct from '../adminComponents/CreateProduct';
import ViewOrder from '../adminComponents/ViewOrder';
import ViewReceipt from '../adminComponents/ViewReceipt';
import ViewUser from '../adminComponents/ViewUser';
import CreateUser from '../adminComponents/CreateUser';
import { useCookies } from 'react-cookie';



function AdminIndex() {
    let store = useContext(Store)
    let [note, setNote] = store.data;
    let history = useHistory();
    let contCreateUser = useRef();
    let contViewUser = useRef();
    let contCreateProduct = useRef();
    let contViewProduct = useRef();
    let [cookie, removeCookie] = useCookies(['adminEmail', 'adminUser', 'adminName', 'adminImage']);
    let contViewOrder = useRef();
    let contViewReceipt = useRef();
    let id = useParams();

    useEffect(() => {
        if (!cookie.adminUser) {
          return  history.push("/admin/login");
        }
    }, [])
    const viewCreateProduct = () => {
        contCreateProduct.current.style.display = 'block';
        contViewProduct.current.style.display = 'none';
        contCreateUser.current.style.display = 'none';
        contViewUser.current.style.display = 'none';
        contViewOrder.current.style.display = 'none'
        contViewReceipt.current.style.display = 'none';
        setNote("CREATE A CAKE");

    }
    const viewAllProducts = () => {
        contViewProduct.current.style.display = 'block';
        contCreateUser.current.style.display = 'none';
        contCreateProduct.current.style.display = 'none';
        contViewUser.current.style.display = 'none';
        contViewOrder.current.style.display = 'none'
        contViewReceipt.current.style.display = 'none';
        setNote("LIST OF ALL CAKES");

    }
    const viewCreateUser = () => {
        contCreateUser.current.style.display = 'block';
        contCreateProduct.current.style.display = 'none'
        contViewProduct.current.style.display = 'none'
        contViewUser.current.style.display = 'none';
        contViewOrder.current.style.display = 'none'
        contViewReceipt.current.style.display = 'none';
        setNote("CREATE A USER");

    }
    const viewAllUsers = () => {
        contCreateUser.current.style.display = 'none'
        contCreateProduct.current.style.display = 'none'
        contViewProduct.current.style.display = 'none'
        contViewOrder.current.style.display = 'none'
        contViewReceipt.current.style.display = 'none';
        contViewUser.current.style.display = 'block';
        setNote("LIST OF ALL USERS");
    }

    const viewOrder = () => {
        contCreateUser.current.style.display = 'none'
        contCreateProduct.current.style.display = 'none'
        contViewProduct.current.style.display = 'none'
        contViewReceipt.current.style.display = 'none'
        contViewUser.current.style.display = 'none'
        contViewOrder.current.style.display = 'block';
        setNote("LIST OF ALL ORDERS");
    }
    const viewReceipt = () => {
        contCreateUser.current.style.display = 'none'
        contCreateProduct.current.style.display = 'none'
        contViewProduct.current.style.display = 'none'
        contViewUser.current.style.display = 'none'
        contViewOrder.current.style.display = 'none'
        contViewReceipt.current.style.display = 'block';
        setNote("LIST OF ALL RECEIPTS");
    }

    return (
        <>
            <section className="adminContainer">

                <div className="flex">
                    <div>
                        <Header
                            viewCreateProduct={viewCreateProduct}
                            viewAllProducts={viewAllProducts}
                            viewCreateUser={viewCreateUser}
                            viewAllUsers={viewAllUsers}
                            viewOrder={viewOrder}
                            viewReceipt={viewReceipt}
                        />

                    </div>
                    <div className="adminBannerCont1">

                        <div>
                            <AdminBanner />
                        </div>
                        <div className="adminBannerBody">
                            <div ref={contCreateUser} style={{ display: 'none' }}>
                                <CreateUser />
                            </div>
                            <div ref={contViewUser} style={{ display: 'none' }}>
                                <ViewUser
                                />
                            </div>

                            <div ref={contCreateProduct} style={{ display: 'none' }}>
                                <CreateProduct />
                            </div>

                            <div ref={contViewOrder} style={{ display: 'none' }}>
                                <ViewOrder
                                />
                            </div>
                            <div ref={contViewReceipt} style={{ display: 'none' }}>
                                <ViewReceipt
                                />
                            </div>
                            <div ref={contViewProduct} style={{ display: 'block' }}>
                                <ViewProduct
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btnHomePage">
                        <Link to="/index">Home Page</Link>
                    </div>
                </div>

            </section>


        </>
    )
}
export default AdminIndex;