import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';
import logo from '../header-logo.png'

function Header(){
    return(
        <nav className=" navbar navbar-expand-lg navbar-light bg-light px-5 border-bottom sticky-top"  >
          <a className="col-md-2-header-navbar navbar-brand  ml-4 text-right" href="https://stackoverflow.com/" target="_blank">
            <img src={logo} width="160" height="35" className="d-inline-block align-top" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <div className="button-container text-center">
                <li className="nav-item active ">
                  <a className="nav-link" href={() => false}>Product <span className="sr-only">(current)</span></a>
                </li>
              </div>
              <div className="button-container text-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://stackoverflow.com/teams/customers">Consumers <span className="sr-only">(current)</span></a>
                </li>
              </div>
              <div className="button-container text-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://stackoverflow.com/teams/use-cases">Use cases<span className="sr-only">(current)</span></a>
                </li>
              </div>
            </ul>
            <form className="mx-2 my-auto d-inline w-100">
              <div className="input-group">
                <input type="text" className="form-control border border-right-0" placeholder="Search..." />
                <span className="input-group-append">
                  <button className="btn btn-outline-secondary border border-left-0" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </nav>
    )
}
export default Header;