import React, { useState } from "react";
import "../../Style/Form.scss";
import Swal from "sweetalert2";

function Formulario() {
  const [fecha, setFecha] = useState(0);

  function handlerSubmit(e) {
    console.log(fecha);
    
    if (fecha === 2021-10-18) {
      console.log("entra");
    }
    Swal.fire({
      icon: "success",
      title: "Perfecto",
      text: "Ahora estas subscrito",
    });
  }

  //  toda fecha arriba de 1900
  return (
    <div>
      <form className="form">
        <div className="title">Subscripció</div>
        <label className="text">Nombre</label>
        <input type="text" className="input" name="name" required />
        <label className="text">Fecha de Nacimiento</label>
        <input
          type="date"
          className="input"
          name="fecha"
          required
          onChange={(fecha) => {
            setFecha(fecha.target.value);
          }}
        />
        <label className="text">Email</label>
        <input type="email" className="input" name="email" required />
        <button className="button" onClick={handlerSubmit}>
          Susbcribir
        </button>
      </form>
    </div>
  );
}

export default Formulario;
