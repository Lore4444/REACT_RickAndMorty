/*FUNCTIONAL COMPONENT*/
/*ATAJO RAFC*/

import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src="/pngwing.com.png" className="App-logo" alt="Mi Imagen" />

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              {/* <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a> */}
              <Link to={`/`} className="nav-link px-2 text-secondary"> Home</Link>
            </li>
            <li>
              <Link to={`characters`} className="nav-link px-2 text-white"> Personajes</Link>
            </li>
            <li>
              <Link to={`user-form`} className="nav-link px-2 text-white"> Formulario</Link>
            </li>
            
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-light "
              placeholder="Search... "
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            {/* <button type="button" className="btn btn-success my-2">
              Sign-up
            </button> */}
            <Link to='/user-form' className="btn btn-success my-2">Registrarse</Link>
          </div>
        </div>
      </div>
      
    </header>
  );
};

//npm uninstall react-router-dom
//npm Audit fix --force
//npm install react-router-dom localforage match-sorter sort-by