import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function CreateProduct() {
  let [name, setName] = useState('');
  let [category, setCategory] = useState('');
  let [price, setPrice] = useState(null);
  let [quantity, setQuantity] = useState(null);
  let [image, setImage] = useState('');
  let [color, setColor] = useState('');
  let [size, setSize] = useState('');
  let [description, setDescription] = useState('');

  // let createProduct = () => {

  // let url = "http://206.189.124.254:9000/create/product";
  // let productObject = {
  //   name,
  //   category,
  //   price,
  //   quantity,
  //   image,
  //   description,
  // color,
  //   size
  // };

  //   fetch(url, {
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     method: "Post",
  //     body: JSON.stringify(productObject)
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     })
  // };


  return (
    <>
      <section className="adminCreatePost">
        <div>
          <Form encType="multipart/form-data" action="http://localhost:5000/product" method="POST">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name of  Cake</Form.Label>
              <Form.Control type="text" name="name"
                // value={name} onChange={(e) => setName(e.target.value)}
                placeholder=""  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Category of Cake</Form.Label>
              <Form.Control type="text" name="category"
                // value={category} onChange={(e) => setCategory(e.target.value)}
                placeholder=""  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Price of Cake</Form.Label>
              <Form.Control type="number" name="price"
                // value={price} onChange={(e) => setPrice(e.target.value)}
                placeholder=""  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Quantity of Cake</Form.Label>
              <Form.Control type="number" name="quantity"
                // value={quantity} onChange={(e) => setQuantity(e.target.value)}
                placeholder=""  required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image of Cake</Form.Label>
              <div className='flex'>
                <Form.Control type="file" name="image"
                  // value={image} onChange={(e) => setImage(e.target.value)}
                  required
      />
                <Form.Control type="text" name="color"
                  // value={color} onChange={(e) => setColor(e.target.value)}
                  placeholder="color" />
                <Form.Control type="text" name="size"
                  // value={size} onChange={(e) => setSize(e.target.value)}
                  placeholder="size in sm, md, lg"  required />
              </div>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of Cake</Form.Label>
              <Form.Control as="textarea" name='description'
                // value={description} onChange={(e) => setDescription(e.target.value)}
                rows={3} name="description" required />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>

        </div>


      </section>

    </>
  )
}
export default CreateProduct;