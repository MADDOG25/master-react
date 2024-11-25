import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../datos/trabajos";

function Proyecto() {
  const params = useParams();

  const [proyecto, setProyecto] = useState("");

  useEffect(() => {
    let proyecto = trabajos.filter((trabajos) => trabajos.id === params.id);
    setProyecto(proyecto[0]);
  }, []);

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} alt={proyecto.nombre} />
      </div>
      <h1 className="heading">{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={"https://" + proyecto.url} target="_blank" rel="noreferrer">
        Ir al proyecto
      </a>
    </div>
  );
}

export default Proyecto;
