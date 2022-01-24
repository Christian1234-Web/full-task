import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

function ViewReceipt() {
    let [order, setOrder] = useState([]);
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



    return (
        <>
            <section className="">
                <div className="adminViewPro" ref={btnShow} style={{ display: 'block' }}>

                    {order.map((e, i) => {
                        if (order.length === 0) {
                            return (
                                <div>Loading....</div>
                            )
                        } else {
                            return (
                                <div style={{ border: "1px solid gray", padding: "5px", marginBottom: "5px" }}>
                                    <h1 className="fs-5">Receipt</h1>
                                    <div className='row'>
                                        <div className="col-md-6 col-sm-12 p-md-2 p-sm-3">
                                            <img src={`http://localhost:5000${e.product_id.image}`} alt="img" />
                                        </div>
                                        <div className="col-md-6 col-sm-12 p-md-2 p-sm-3">
                                            <h1 className="fs-5">Product: {e.product_id.name} </h1>
                                            <div>User: {e.user_id.name}</div>
                                            <div>Description: {e.product_id.description}</div>
                                            <div>category: {e.product_id.category}</div>
                                            <div>Color:{e.product_id.color}</div>
                                            <div>Size: {e.product_id.size}</div>
                                            <div>Date: {e.createdAt}</div>
                                            <div>Is Paid: true</div>
                                            <div style={{ color: "red" }}>Price: ${e.product_id.price}</div>
                                            <Button className="mt-3" variant="success"> Print Receipt </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>


            </section>
        </>
    )
};
export default ViewReceipt;