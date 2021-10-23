import React from "react";
import "../../Style/Form.scss";
import Swal from "sweetalert2";

function Formulario() {
  function handlerSubmit(e) {
    e.prevent.Default();
    Swal.fire({
      icon: "success",
      title: "Perfecto",
      text: "Ahora estas subscrito",
    });
  }

  return (
    <div>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="title">Subscripció</div>
        <label className="text">Nombre</label>
        <input
          type="text"
          className="input"
          name="name"
          required
        />
        <label className="text">Fecha de Nacimiento</label>
        <input
          type="date"
          className="input"
          name="fecha"
          required
        />
        <label className="text">Email</label>
        <input
          type="email"
          className="input"
          name="email"
          required
        />
        <button className="button">Susbcribir</button>
      </form>
    </div>
  );
}

export default Formulario;
