import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SignUp from '../assets/images/logo.jpg';
import { Store } from "../context/store";
import { useCookies } from 'react-cookie';

function Signup() {
  let store = useContext(Store);
  let [name, setName] = useState('');
  let [cookie, setCookies,] = useCookies(['adminEmail', 'adminUser', 'adminName', 'adminImage', 'token']);
  let [token, setToken] = store.token;
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');
  let [success, setSuccess] = useState('');
  let history = useHistory();

  let createUser = () => {
    let url = "http://localhost:5000/user";
    let createObject = { name, phone, email, password, is_admin: false, is_client: true };
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(createObject)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.error);
        if (result.key) {
          setError(result.massage);
        }
        if (result.status === 'error') {
          setError(result.error);
        }

      })
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="whiteBg">


        <section className="signUp">
          <div>

            <div className="logLog" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', width: "10rem" }}>
              <div>
                <Link style={{ marginLeft: "12rem" }} to="/index"><img src={SignUp} /></Link>
              </div>
            </div>
            <div className="signContainer">
              <div className="signCreate">
                <h2>Create account</h2>
              </div>
              <div className="inputDiv" style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {error && <div>{error}</div>}
              </div>
              <div className="inputDiv">
                <p>Your Name</p>
                <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="inputDiv">
                <p>Phone</p>
                <input type='number' name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="inputDiv">
                <p>Email</p>
                <input type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="inputDiv">
                <p>Password</p>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
                <i class="a-icon a-icon-alert"></i>
                <p>Passwords must be at least 6 characters.</p>
              </div>
              <div className="inputDiv">
                <p>Re-enter password</p>
                <input type='password' />
              </div>

              <div className="inputDiv">
                <button className="signBtn" type="button" onClick={() => createUser()}>Creat your MrCake account</button>
              </div>
              <div className="inputDiv noMg">
                <p className="noMg">By creating an account, you agree to MrCake's</p>
                <Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice.</Link>
              </div>
              <div className="inputDiv alreadySign ">
                <>Already have an account? </>
                <Link to="/login">Sign-In</Link>
                <div>
                  <>Buying for work</><Link to=""> Create a free business account.</Link>
                </div> </div>
            </div>
          </div>
        </section>
        <div className="signFooterContainer">

          <div className="signFooter">
            <div className="signFooterCnt">
              <div>
                <Link to=""> Conditions of Use </Link>
              </div>
              <div>
                <Link to=""> Privacy Notice  </Link>
              </div>
              <div>
                <Link to=""> Help </Link>
              </div>
            </div>
            <div className="signFooterCnt">
              © 1996-2021, MrCake.com, Inc. or its affiliates
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Signup;