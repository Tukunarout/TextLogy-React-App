import React from "react";
import PropTypes from 'prop-types'


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border:"1px solid black"}}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="/textlogy">
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
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            <div className="modeCheckBox mx-5" style={{display: "flex"}}>
            <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="exampleRadios" onChange={props.switchColor} id="exampleRadios1" value="option1"/>
                <label className={`form-check-label text-${props.mode === 'warning' || props.mode === 'success' || props.mode === 'primary' ? 'dark' : 'primary'}`} htmlFor="exampleRadios1">
                  <b>Blue</b>
                </label>
              </div>
              <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="exampleRadios" onChange={props.switchColor} id="exampleRadios2" value="option2"/>
                <label className={`form-check-label text-${ props.mode === 'primary' || props.mode === 'warning' || props.mode === 'success' ? 'dark' : 'success'}`} htmlFor="exampleRadios2">
                  <b>Green</b>
                </label>
              </div>
              <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="exampleRadios" onChange={props.switchColor} id="exampleRadios3" value="option3" />
                <label className={`form-check-label text-${ props.mode === 'primary' || props.mode === 'success' || props.mode === 'warning' ? 'dark' : 'warning'}`} htmlFor="exampleRadios3">
                  <b>Yellow</b>
                </label>
              </div>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' || props.mode === 'primary' || props.mode === 'success' || props.mode === 'warning' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>{props.textcolorSwitch}</b></label>
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


