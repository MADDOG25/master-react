import React from "react";
import { trabajos } from "../datos/trabajos";
import { Link } from "react-router-dom";
function ListadoTrabajos({limite}) {
  return (
    <section className="works">
      {trabajos.slice(0, limite).map((trabajo) => (
        <article key={trabajo.id} className="work-item">
          <div className="mask">
            <img src={"/images/" + trabajo.id + ".png"} alt={trabajo.nombre} />
          </div>
          <span>{trabajo.categoria}</span>
          <h2>
            <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
          </h2>
          <h3>{trabajo.tecnologias}</h3>
          <p>{trabajo.descripcion}</p>
        </article>
      ))}
    </section>
  );
}

export default ListadoTrabajos;
