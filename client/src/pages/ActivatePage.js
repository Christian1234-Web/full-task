import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Store } from "../context/store";
import { useCookies } from 'react-cookie';
import { useParams, useHistory } from 'react-router-dom';

function ActivatePage() {
  let store = useContext(Store);
  let [token, setToken] = store.token;
  let [error, setError] = useState('');
  let [cookie, setCookies,] = useCookies(['token']);
  let id = useParams();
  let history = useHistory();


  const activateBtn = () => {
    let url = 'http://localhost:5000/activate-account';
    console.log(id.id);
    let data = { token: id.id };
    console.log(data);
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.error) {
          return setError(res.error);
        }
        if (res.massage) {
          setError(res.massage);
          history.push('/');
        }
      })
  }

  return <div id='activateDiv'>
    <br />  <br />  <br />
    <Button variant="success" onClick={() => activateBtn()}>click to activate</Button>
    <div className="inputDiv" style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {error && <div>{error}</div>}
    </div>
  </div>;
}

export default ActivatePage;
