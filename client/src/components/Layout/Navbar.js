import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Navbar( ) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  const loggout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const authLinks = (
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to='/dashboard' className='nav-link'>
        Dashboard
        </Link>      </li>
        <li className="nav-item active">

           <Link onClick={(e) => loggout(e)} to='#' >
          <FontAwesomeIcon className='' icon={faSignOutAlt} />
         <span className='logout'>Logout</span>
        </Link>    
        </li>
      
    </ul>
  </div>
</nav>
  );

  const guestLinks = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Test Tech</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to='login' className='nav-link'>
        Login
        </Link>      </li>
        <li className="nav-item active">
      <Link to='register' className='nav-link'>
        Sing up
        </Link>      </li>
      
    </ul>
  </div>
</nav>
  );



  return (
    <div className='mynavvbar'>
      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null
          ? authLinks
          : guestLinks}
      </Fragment>

    </div>
  );
}

export default Navbar