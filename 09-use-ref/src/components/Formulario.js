import React, { useRef } from "react";

export const Formulario = () => {
  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const micaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();

    console.log(nombreInput.current.value);
    console.log(apellidoInput.current.value);
    console.log(emailInput.current.value);

    //micaja
    console.log(micaja);
    let { current: caja } = micaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML = "Formulario enviado";
  };

  return (
    <div>
      <h1>Formulario</h1>

      <div ref={micaja} className="micaja">
        <h2>Pruebas con useRef</h2>
      </div>

      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreInput} />
        <br />
        <input type="text" placeholder="Apellidos" ref={apellidoInput} />
        <br />
        <input type="text" placeholder="Correo electronico" ref={emailInput} />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
