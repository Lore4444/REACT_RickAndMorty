import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import DogService from "../../services/Dog.service";

export const Detail = () => {

    const [dog, setDog] = useState({});
    const {id} = useParams();
    console.log("el id es:" + id);
    const { pathname } = useLocation();

useEffect(() => {
    console.log("prueba locacion" + pathname);
    DogService.getMascotasById(id)
    .then((data) => setDog(data))
}, [])



  return (
    <div className='row m-5'>
        <div className='col-md-12'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
                <div className='card-body d-flex flex-column align-items-start'>
                    <strong className='d-inline-block mb-2 text-success'>
                        Personaje 
                    </strong>
                    <h3 className='mb-0 text-dark'> {dog.name}</h3>
                    <div className='mb-1 text-muted'>
                        {new Date(dog.created).toLocaleDateString()}
                    </div>
                    <div className='mb-1 text-muted'></div>
                    <p className='card-text mb-auto'>
                        Informacion
                        
                    </p>
                    <ul className='list-group mt-1'>
                        <li className='list-group-item'><strong> Especie: </strong> {dog.species}</li>
                        <li className='list-group-item'><strong> Estado: </strong> {dog.status}</li>
                        <li className='list-group-item'><strong> Tipo: </strong> {dog.gender}</li>
                        
                    </ul>

                    <Link to={"/"} className='btn btn-success my-2'>
                        Home
                    </Link>

                </div>
                <img 
                className='h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4'
                height="auto"
                src={dog.image}
                alt=""
                />

            </div>

        </div>

    </div>
  )
}
