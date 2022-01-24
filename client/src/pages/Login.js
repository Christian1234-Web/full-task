import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SignUp from '../assets/images/logo.jpg';
import { useCookies } from 'react-cookie';

function Login() {
  let [cookie, setCookies,] = useCookies(['email', 'user', 'name']);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');
  let [msg, setMsg] = useState(null)
  let [success, setSuccess] = useState('');
  let [check, setCheck] = useState();

  let history = useHistory();
  let loginUser = () => {
    let url = "http://localhost:5000/login";
    let loginObject = { email, password, active: true };
    if (!email || !password) {
      console.log("error")
      return setError('Invalid username or password');
    }

    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "Post",
      body: JSON.stringify(loginObject)
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === 'error') {
          return setError(result.error);
        }
        setError('Login successfully');
        console.log(result)
        setCookies('user', result.data._id, { path: '/' });
        setCookies('name', result.data.name, { path: '/' });
        setCookies('email', result.data.email, { path: '/' });
        history.push("/cart")
      });
  };


  return (
    <>
      <div className="whiteBg">


        <section className="login">
          <div>

            <div className="logLog" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px',width:"10rem" }}>
              <div>
              <Link style={{marginLeft:"12rem"}} to="/index"><img  src={SignUp} /></Link>
</div>
            </div>
            <div className="logContainer">
              <div className="logCreate">
                <h2>Sign-In</h2>
              </div>
              <div className="inputDiv">
                <p>Enter Email</p>
                <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="inputDiv">
                <p>Enter Password</p>
                <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>


              <div className="inputDiv msgRed">
                {/* {success} */}
              </div>

              <div className="inputDiv" style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {error && <div>{error}</div>}
              </div>
              {/* {check.map((e) => {
            return(
              <div className="inputDiv" key={e}>
                <div>{e.error}</div>
              </div>
                         ) })} */}
              <div className="inputDiv">
                {/* {msg && <p>{msg}</p>} */}
              </div>

              <div className="inputDiv">
                <button className="logBtn" type="button" onClick={() => loginUser()}>Continue</button>
              </div>

              <div className="inputDiv noMg">
                <p className="noMg">By creating an account, you agree to MrCake's</p>
                <Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice.</Link>
              </div>
              <div className="inputDiv alreadySign">

                <Link to="">Need help?</Link>

              </div>
            </div>

            <div className="logNew">
              <div>
                <div style={{ paddingLeft: '80px' }}>
                  <p>New to MrCake?</p>
                </div>

                <div>
                  <Link to="/signup"><button className="logBtn2">Create your MrCake account</button></Link>
                </div>
              </div>  </div>
          </div>
        </section>
        <div className="logFooterContainer">

          <div className="logFooter">
            <div className="logFooterCnt">
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
            <div className="logFooterCnt">
              © 1996-2021, MrCake.com, Inc. or its affiliates
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Login;