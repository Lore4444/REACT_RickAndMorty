import { useState } from "react";

//HOOK que nos permite manejar un formulario
export const useUserForm = (initialState = {}) => {

  const [form, setForm] = useState(initialState);

  //FUNCION que se va a encargar de escuchar cambios en un input y va a tomar el target
  const handleChanges = ({ target }) => {

    const { name, value } = target; //TARGET va a hacer referencia al input que llama a handleChanges

    console.log("target", target);
    console.log("name", name);
    console.log("value", value);


    setForm({
      ...form, //esto hace que si el form ya tenia valor tmb los incluya y agregue los nuevos
      [name]: value,
    });
  };
  return {
    form,
    setForm,
    handleChanges,
  };
};
