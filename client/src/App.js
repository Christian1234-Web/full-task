import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import StoreContext from "./context/store";
import './scss/style.css';
import './scss/main.css';

import "../src/assets/icons/boxicons/css/boxicons.min.css";
import "../src/assets/icons/bootstrap-icons/bootstrap-icons.css";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminIndex from "./admin/pages/AdminIndex";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminSignUp from "./admin/pages/AdminSignUp";
import ActivatePage from "./pages/ActivatePage";


const App = () => {
  return (
    <StoreContext>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/admin/dashboard/:id">
            <AdminIndex />
          </Route>
          <Route path="/admin/signup">
            <AdminSignUp />
          </Route>
          <Route path="/admin/login">
            <AdminLogin />
          </Route>
           <Route path="/activate/account/:id">
            <ActivatePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreContext>
  );
}
export default App;
