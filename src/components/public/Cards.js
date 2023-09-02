import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import DogService from "../../services/Dog.service";

export const Cards = () => {

  const [dogs, setDogs] = useState([]);
  
  //FUNCION que se encarga de una escucha activa de lo que pasa o cambia en mi componente (en este caso dogs) para hacer lo que tenga q hacer
  useEffect(() => {
    DogService.getMascotas()
       .then((data) => setDogs(data.results))
       .catch((error) => console.log(error));
  
  }, [dogs])//esta es la variable a escuchar constantemente para ver si cambia

  //CONST que en base a la variable cardList genera y devuelve cartas con esos elementos
  const cardsList = dogs.map((m) => <Card dog={m} key={m.id}/>)

  return (
    <div className="character">
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardsList}
        </div>
      </div>
    </div>
    </div>
  );
};
