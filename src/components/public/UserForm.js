import React, { useEffect, useState } from "react";
import { useUserForm } from "../../hooks/Custom.hook";
import { Link } from "react-router-dom";

export const UserForm = () => {

  // const { form, handleChanges } = useUserForm();
  const { form, setForm, handleChanges } = useUserForm();
  const [areEquals, setAreEquals] = useState(true); // se va a encargar de ver si las contraseñas son iguales
  const [passwordConfirmation, setpasswordConfirmation] = useState(); //se encarga de atrapar la unica clave que vamos a mandar
  const [pass, setPass] = useState(true);

  //FUNCIONES
  // const validPass = () => {
  //   //comprueba que la password no este indefinida
  //   const { password } = form;
  //   if (password !== undefined) {
  //     setPass(false);
  //   }
  //   return pass;
  // }
  
  const handlePasswordConfirmation = (e) => {
    //la e hace referencia al input de donde se ejecuta la funcion
    setpasswordConfirmation(e.target.value); //aca vemos el valor de ese input
  };

  useEffect(() => {
    const { password } = form; //hago un destructuring de form, es decir, saco lo que me interesa de form, en este caso password, que es el name del input de contraseña
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation]);//[passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    //se va a encargar de atrapar el envio del formulario
    e.preventDefault();
    // UserService.save(form) - Para enviar la informacion al servidor
    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate</h4>

      <form>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChanges}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Clave
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
              onChange={handleChanges}
              // required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Repetir Clave
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-success">
                Las Claves no son iguales
              </div> //Para que aparezca un mensaje que las claves no coinciden
            )}
          </div>
        </div>

        <hr className="my-4"></hr>

        <div className="row g-3">
          <button
            disabled={!areEquals} //{!areEquals || pass} Para no poder registrar hasta que las claves coincidan
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Registrarme
          </button>

          <Link to={"/"} className="btn btn-outline-dark me-2">
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};
