import React, { useEffect, useState, useRef } from 'react'
import { Table, Form, Button } from 'react-bootstrap';

function ViewUser(props) {
  let [users, setUsers] = useState([]);

  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userId, setUserId] = useState(null);
  let [close, setClose] = useState(false);
  let btnHide = useRef();
  let btnShow = useRef();



  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    let url = "http://localhost:5000/user";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        setClose(close)
      });
  }


  const deleteUser = (_id) => {
    let url = "http://localhost:5000/user/" + _id;

    if (window.confirm('Are you sure?')) {
      fetch(url, {
        headers: {
          'content-type': 'application/json'
        },
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          getUsers();
        });

    }
  }


  const edithUser = (i) => {
    if (!close) {
      console.log(users[i]);
      let item = users[i];
      setName(item.name);
      setPhone(item.phone);
      setEmail(item.email);
      setPassword(item.password);
      setUserId(item._id);
      btnHide.current.style.display = 'block';
      btnShow.current.style.display = 'none';

    }
  };
  const updateUser = () => {
    let item = { name, phone, email, password, }
    let url = "http://localhost:5000/user/" + userId;
    console.warn("item", item)

    fetch(url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(item)

    })
      .then((res) => res.json())
      .then((result) => {
        getUsers();
      });
    btnHide.current.style.display = 'none';
    btnShow.current.style.display = 'block';
    console.log(userId)
  }
  const cancel = () => {
    btnHide.current.style.display = 'none';
    btnShow.current.style.display = 'block';
  }


  return (
    <>
      <section>

        <div className="adminViewPro" ref={btnShow} style={{ display: 'block' }}>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th> Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Manage Product</th>
              </tr>
            </thead>
            {users.map((e, i) => {
              if (users.length === 0) {
                return (
                <div>Loading.....</div>
              )
              } else {
                return (
                  <tbody>
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>
                        <Button className='adminBtn' variant="success" onClick={() => edithUser(i)}>Edith</Button>||
                        <Button className='adminBtn' variant="danger" onClick={() => deleteUser(e._id)}>Delete</Button>
                      </td>                </tr>
  
                  </tbody>
                )
            }
            })}
          </Table>
        </div>

      </section>

      <section className="adminCreatePost" ref={btnHide} style={{ display: 'none' }}>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name of  User</Form.Label>
              <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone Number of User</Form.Label>
              <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email of User</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password of User</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" />
            </Form.Group>
            <div className="flex" style={{ marginLeft: '10px' }}>
              <Button variant="danger" onClick={() => updateUser()}>
                Update
              </Button>
              <Button variant="success" onClick={() => cancel()}>
                Cancel
              </Button>
            </div>

          </Form>
        </div>
      </section>
    </>
  )
};
export default ViewUser;

