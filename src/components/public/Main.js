/*className= COMPONENT*/
/* ATAJO RCE
export className= Main extends Component {
  render() {
    return (
      <div>Main</div>
    )
  }
}

export default Main */

import React, { Component } from "react";
import { Cards } from "./Cards";
import { Card } from "./Card";
import DogService from "../../services/Dog.service";
import { Carrousel } from "./Carrousel";


export default class Main extends Component {

  constructor(props) {
    //cada vez que uso constructor debo usar props(propiedades que recibira este main comp) y super
    super(props); //super es el llamado a Component
    //con esto montamos el componente
    this.state = {  dogs : [] }
  }

  // componentDidMount(){
  //   DogService.getAllBreeds()
  //   .then((data) => this.setState({dogs: data.results}))
  //   .catch((error) => console.log(error));
  // }


  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light text-dark">RICK AND MORTY</h1>
              <p className="lead text-body-secondary align-text-justify">
              Rick y Morty es una serie de animación para adultos estadounidense 
              creada por Justin Roiland y Dan Harmon para Adult Swim, la franja 
              de programación nocturna de Cartoon Network.
              </p>
              
              <p>
                <a href="#" className="btn btn-success my-2">
                  RICK
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  MORTY
                </a>
              </p>
            </div>
          </div>
        </section>

        <Carrousel/>
        {/* <Cards dogs={this.state.dogs} />  */}
        {/* <Cards/>  */}

        
      </main>
    );
  }
}
