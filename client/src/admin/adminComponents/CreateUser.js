import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';


function CreateUser() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  // let userId = '1';

  let createPost = () => {
    let url = "http://localhost:5000/user";
    let createObject = {
      name,
      email,
      password
    };
    console.log(createObject)
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(createObject)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
  };

  return (
    <>
      <section className="adminCreatePost">
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name of  User</Form.Label>
              <Form.Control type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email of User</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password of User</Form.Label>
              <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" />
            </Form.Group>
            <Button variant="danger" onClick={() => createPost()}> Submit </Button>
          </Form>
        </div>
      </section>
    </>
  )
}
export default CreateUser;