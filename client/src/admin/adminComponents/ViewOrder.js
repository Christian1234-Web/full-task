import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

function ViewOrder() {
    let [order, setOrder] = useState([]);
    let [name, setName] = useState("");
    let [category, setCategory] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [image, setImage] = useState("");
    let [description, setDescription] = useState("");
    let [color, setColor] = useState('');
    let [username, setUsername] = useState('');
    let [size, setSize] = useState('');
    let btnHide = useRef();
    let btnShow = useRef();

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = () => {
        let url = "http://localhost:5000/order";
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                setOrder(result);
                // alert('working...')
            });
    }



    const checkOder = (i) => {
        let item = order[i];
        console.log(item);
        setName(item.product_id.name);
        setCategory(item.product_id.category);
        setPrice(item.product_id.price);
        setQuantity(item.product_id.quantity);
        setImage(item.product_id.image);
        setDescription(item.product_id.description);
        setColor(item.product_id.color);
        setSize(item.product_id.size);
        setUsername(item.user_id.name);
        btnHide.current.style.display = 'block';
        btnShow.current.style.display = 'none';
    }
    const cancelPro = () => {
        btnHide.current.style.display = 'none';
        btnShow.current.style.display = 'block';

    }
    return (
        <>
            <section className="">
                <div className="adminViewPro" ref={btnShow} style={{ display: 'block' }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Image</th>
                                <th> Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Description</th>
                                <th>Manage Product</th>
                            </tr>
                        </thead>

                        <tbody>
                            {order.map((e, i) => {
                                if (order.length === 0) {
                                    <div>Loading....</div>
                                }
                                else {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{e.user_id.name}</td>
                                            <td><img src={`http:localhost:5000${e.product_id.image}`} alt="fyn image" style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '50%' }} /></td>
                                            <td>{e.product_id.name}</td>
                                            <td>{e.product_id.category}</td>
                                            <td>{e.product_id.price}</td>
                                            <td>{e.product_id.quantity}</td>
                                            <td>{e.product_id.color}</td>
                                            <td>{e.product_id.size}</td>
                                            <td>{e.product_id.description}</td>

                                            <td>
                                                <Button className='adminBtn' variant="success" onClick={() => checkOder(i)}>View</Button>
                                            </td>
                                        </tr>
                                    );
                                }
                            })}

                        </tbody>

                    </Table>
                </div>
            </section>

            <section className="adminCreatePost" ref={btnHide} style={{ display: 'none' }}>
                <div className='row'>
                    <div className="col-md-6 col-sm-12 p-md-2 p-sm-3">
                        <img src={`http://localhost:5000${image}`} alt="img" />
                    </div>
                    <div className="col-md-6 col-sm-12 p-md-2 p-sm-3">
                        <h1 className="fs-5">Product: {name} </h1>
                        <div>User: {username}</div>
                        <div>Description: {description}</div>
                        <div>category: {category}</div>
                        <div>Color:{color}</div>
                        <div>Size: {size}</div>
                        <div style={{ color: "red" }}>Price: ${price}</div>

                        <Button className="mt-3" variant="success" onClick={() => cancelPro()}>
                            Back
                        </Button>
                    </div>
                </div>


            </section>
        </>
    )
};
export default ViewOrder;