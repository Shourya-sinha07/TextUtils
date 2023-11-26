import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(prop) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode} `}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="#">{prop.title}</Link> */}
    <a className="navbar-brand" href="#">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>  -->this code is comment out because we stop routing */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
        </ul>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={prop.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

// here we setting the proptype setting that title should be an string.If we give value to title except string it will give us an error 
 Navbar.propTypes = {
  title:PropTypes.string}  
  //here we set thee dfault prop vlaue if we forgot to set the value of title in any case tgen the default value to title show be show there 
  Navbar.defaultProps = {
  title:'Set title here'
  }