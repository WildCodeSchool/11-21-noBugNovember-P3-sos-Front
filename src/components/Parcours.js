import "./Styles/Parcours.css";
import { useState } from "react";
import Snake from "../assets/snake.svg";

const Parcours = () => {
  return (
    <div className="wrapperSnake" style={{ backgroundImage: `url(${Snake})` }}>
      <div className="SnakeLine">
        <button className="parcourBtn orange5 borderRadius">JEUNESSE</button>
        <button className="parcourBtn orange4 borderRadius">
          PRÉ-INCUBATION
        </button>
        <button className="parcourBtn orange3 borderRadius">IDEATION</button>
        <button className="parcourBtn orange2 borderRadius">AMORÇAGE</button>
        <button className="parcourBtn orange1 borderRadius">INCUBATION</button>
      </div>
      <div className="SnakeLine">
        <button className="parcourBtn green5 borderRadius">CRÉATION</button>
        <button className="parcourBtn green4 borderRadius">
          OUTILS DE GESTION
        </button>
        <button className="parcourBtn green3 borderRadius">CONCOURS</button>
        <button className="parcourBtn green2 borderRadius">R&#38;D</button>
        <button className="parcourBtn green borderRadius">
          LEVÉE DE FONDS
        </button>
      </div>
    </div>
  );
};
export default Parcours;
