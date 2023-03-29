import { Route, Routes }from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css';
import setAuthToken from './Redux/utils/setAuthToken';
import { loadUser } from './Redux/Actions/auth';
import store from './Redux/Store';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashborad/Dashboard";
import Alert from "./components/Layout/Alert";
import Navbar from "./components/Layout/Navbar";
import Test from "./components/dashborad/Test";
import Aside from "./components/Layout/Aside";
import AddClient from "./components/Client/AddClient";
import ListClient from "./components/Client/ListClient";
import ListFournissrur from "./components/Fournisseur/ListFournissrur";
import AddFournissuer from "./components/Fournisseur/AddFournissuer";
import AddProduct from "./components/Product/AddProduct";
import ListProduct from "./components/Product/ListProduct";
import EditClient from "./components/Client/EditClient";
import EditFournisseur from "./components/Fournisseur/EditFournisseur";
import EditProduct from "./components/Product/EditProduct";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
<div id="page-top">
    <Navbar/>
    <Alert className='aaa' />

    <div id="wrapper">
        <Aside/>
        <Routes>
              <Route exact path='/register' element={<Register/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route  path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route exact path='/Test' element={<Test/>} />
              <Route exact path='/add-client' element={<PrivateRoute><AddClient/></PrivateRoute>} />
              <Route exact path='/ListClient' element={<PrivateRoute><ListClient/></PrivateRoute>} />
              <Route exact path='/ListFournissrur' element={<PrivateRoute><ListFournissrur/></PrivateRoute>} />
              <Route exact path='/AddFournissuer' element={<PrivateRoute><AddFournissuer/></PrivateRoute>} />
              <Route exact path='/AddProduct' element={<PrivateRoute><AddProduct/></PrivateRoute>} />
              <Route exact path='/ListProduct' element={<PrivateRoute><ListProduct/></PrivateRoute>} />
              <Route exact path='/edit-client' element={<PrivateRoute><EditClient/></PrivateRoute>} />
              <Route exact path='/edit-fournisseur' element={<PrivateRoute><EditFournisseur/></PrivateRoute>} />
              <Route exact path='/edit-product' element={<PrivateRoute><EditProduct/></PrivateRoute>} />

              
              
        </Routes>



    </div>
</div>
  );
}
export default App;