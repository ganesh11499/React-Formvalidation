import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mt-3">
    <form className="container-fluid justify-content-start">
      <Link to={'/form'}>
         <button className="btn btn-lg btn-outline-success me-2" type="button">Form</button>
      </Link>
     <Link to={'/table'}> 
         <button className="btn btn-lg btn-outline-secondary" type="button">Table</button>
     </Link>
    </form>
  </nav>
  )
}

export default Topbar
