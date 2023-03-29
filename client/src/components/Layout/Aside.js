import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const linkStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer'
  };
function Aside() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { isAuthenticated, loading, user } =auth ;
  
  return ( loading
    ? null
    : isAuthenticated && user !== null
    ?
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <hr class="sidebar-divider my-0"/>

    <li class="nav-item active">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    <hr class="sidebar-divider"/>

    <div class="sidebar-heading">
        Interface
    </div>

    <li class="nav-item">
    <button style={linkStyle} class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
  <i class="fas fa-fw fa-cog"></i>
  <span>Client</span>
</button>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Client:</h6>
                <Link class="collapse-item" to="/add-client">Add Client</Link>
                <Link class="collapse-item" to="/ListClient">List Client</Link>
            </div>
        </div>
    </li>

    <li class="nav-item">
        <a class="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Fournisseur</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Fournisseur :</h6>
                <Link class="collapse-item" to="/AddFournissuer">Add Fournisseur</Link>
                <Link class="collapse-item" to="/ListFournissrur">List Fournisseur</Link>            </div>
        </div>
    </li>

    <hr class="sidebar-divider"/>

    <div class="sidebar-heading">
        Stock
    </div>

    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Product</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Product:</h6>
                <Link class="collapse-item" to="/AddProduct">Add Product</Link>
                <Link class="collapse-item" to="/ListProduct">List Product</Link>
            </div>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Bon d'achat</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Bon d'achat:</h6>
                <Link class="collapse-item" to="/">Add Bon d'achat</Link>
                <Link class="collapse-item" to="/">List Bon d'achat</Link>
            </div>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Bon de vente</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Bon de vente:</h6>
                <Link class="collapse-item" to="/">Add Bon de vente</Link>
                <Link class="collapse-item" to="/">List Bon de vente</Link>
            </div>
        </div>
    </li>
    {/* <li class="nav-item">
        <a class="nav-link" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li> */}
</ul> :null )
}

export default Aside