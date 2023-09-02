import React, { useState } from "react";

/*FUNCTIONAL COMPONENT*/
export const Footer = () => {
  /*HOOKS
  Se utiliza en las functional component
  para utilizarlo primero lo invocamos colocando 
  useState
  Control espacio useStateSnippet
  */

  const [clicks, setClicks] = useState(0);
  const year = new Date().getFullYear();
  const nameCompany = "<LoDev>";
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {year} - {nameCompany} - Clicks {clicks}
        </p>
        {/* uso la variable year para que automaticamente aparezca el año correcto sin tener la 
      necesidad de modificar el codigo */}
        <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto 
        link-body-emphasis text-decoration-none"
        onClick={handleClick}>
          
          <img src="/pngwing.com.png" alt="Mi Imagen" width="100" height="100"/>
            
        </span>
        
        
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Arriba 
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-body-secondary">
              -
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-body-secondary">
              Rick and Morty
            </p>
          </li>
          
        </ul>
      </footer>
    </div>
  );
};
