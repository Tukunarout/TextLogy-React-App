import React from "react";
import PropTypes from 'prop-types'


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border:"1px solid black"}}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            <b>{props.title}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li> */}
            </ul>
            <div className="d-flex">
              <div className="bg-light rounded mx-2" onClick={()=>{props.switchColor('light')}} style={{height:"20px",width:"20px",cursor:'pointer'}}></div>
              <div className="bg-primary rounded mx-2" onClick={()=>{props.switchColor('primary')}} style={{height:"20px",width:"20px",cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.switchColor('success')}} style={{height:"20px",width:"20px",cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.switchColor('warning')}} style={{height:"20px",width:"20px",cursor:'pointer'}}></div>              
              <div className="bg-dark rounded mx-2" onClick={()=>{props.switchColor('dark')}} style={{height:"20px",width:"20px",cursor:'pointer'}}></div>
            </div>
          </div>
        </div>
      </nav>
  );
  
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
// Navbar.defaultProps = {
//     title: "Default Title",
//     aboutText: "Default About"
// }


