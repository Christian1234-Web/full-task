import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { Store } from '../../context/store';
import ImageOne from '../../assets/images/first-slider-1.jpg';
import { useCookies } from 'react-cookie';
import axios from 'axios';


const Header = (props) => {
    let store = useContext(Store)
    let history = useHistory();
    let [cookie, removeCookie] = useCookies(['adminEmail', 'adminUser', 'nameAdmin', 'adminImage']);
    let [user, setUser] = useState([])
    let id = useParams();
    useEffect(() => {
        fetchLoginUser();
    }, []);

    const fetchLoginUser = () => {
        let url = 'http://localhost:5000/user/' + id.id;
        console.log(id.id)
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setUser(res);
                console.log(res, 'loginuser');

            });
    }

    let handleLogOut = async () => {
        console.log(cookie.adminUser);
        let url = "http://localhost:5000/logout/" + id.id;
        let data = { active: false };
        if (window.confirm('Are you sure, you want to LogOut?')) {
            await axios.put(url, data).data;
            removeCookie('adminUser', { path: '/' });
            console.log(cookie.adminUser,data);
            // history.push("/admin/login");
        }
    };

    return (
        <>
            <section className="adminHeader">
                <div className="adminHdCnt">
                    {user.map((e) => {
                        return (
                            <div className='text-center'>
                                <img src={e.image} className='img-thumbnail" mt-2 rounded-circle'
                                    style={{ width: "80%", border: "3px solid gray" }} alt='img' />
                                <div>{e.name}</div>
                                <div>{e.email}</div>
                            </div>
                        )
                    })}
                    <div id='scrollAd'>
                        <li>
                            <Link onClick={() => props.viewAllProducts()}>All Cakes</Link>
                        </li>
                        <li>
                            <Link onClick={() => props.viewCreateProduct()}>Create Cake</Link>
                        </li>
                        <li>
                            <Link onClick={() => props.viewAllUsers()}>All Users</Link>
                        </li>
                        <li>
                            <Link onClick={() => props.viewCreateUser()}>Create User</Link>
                        </li>
                        <li>
                            <Link onClick={() => props.viewOrder()}>View Orders</Link>
                        </li> <li>
                            <Link onClick={() => props.viewReceipt()}>View Receipt</Link>
                        </li>
                        <li>
                            <Link onClick={() => handleLogOut()}>Logout</Link>
                        </li>
                    </div>

                </div>

            </section>


        </>
    )
}
export default Header;