import { API_DOG } from "../constants/Api.constants";

//SERVICIO que es una capa especializada en comunicarse con APIs
class DogService{

    /*Esta funcion se puede hacer en el Main Component*/
    async getMascotas(){
        const response = await fetch(API_DOG.CHARACTER());//FUNCION, tiene que ir con (), nos trae todos los personajes
        return response.json(); //si no lo convierto a json nos trae el response y puedo ver el status, body, etc
        
    };
    async getMascotasById(id){
        const response = await fetch(API_DOG.CHARACTER_BY_ID(id));//FUNCION que nos trae los pers por id
        return response.json();
    }
    
}

export default new DogService();//Nos permite usarla desde cualquier lugar donde estemos

