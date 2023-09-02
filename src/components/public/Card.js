import React from 'react'
import { Detail } from './Detail'
import { Link } from 'react-router-dom'

export const Card = ({dog}) => {
  return (
    <div className="col">
            <div className="card shadow-sm">
              <img
                width="100%"
                src={dog.image}
              />
              <h3 className='nb-2 text-success m-2'><u> {dog.name} </u></h3>
              <h4 className='m-2 text-dark'><em> {dog.species} </em></h4>
                
                {/* <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  {dog.species}
                </text> */}
              
              <div className="card-body">
                <p className="card-text">
                  Informacion relacionada con el personaje.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  
                    <Link to={`/details/${dog.id}`} className='btn btn-success my-2'>Detalle</Link>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
  )
}
