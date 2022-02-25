import "./Styles/Parcours.css";
import { useState } from "react";
import Snake from "../assets/snake.svg";

const Parcours = () => {
  return (
    <div className="wrapperSnake" style={{ backgroundImage: `url(${Snake})` }}>
      <div className="SnakeLine">
        <button className="parcour-btn orange5">JEUNESSE</button>
        <button className="parcour-btn orange4">PRÉ-INCUBATION</button>
        <button className="parcour-btn orange3">IDEATION</button>
        <button className="parcour-btn orange2">AMORÇAGE</button>
        <button className="parcour-btn orange1">INCUBATION</button>
      </div>
      <div className="SnakeLine">
        <button className="parcour-btn green5">CRÉATION</button>
        <button className="parcour-btn green4">OUTILS DE GESTION</button>
        <button className="parcour-btn green3">CONCOURS</button>
        <button className="parcour-btn green2">R&#38;D</button>
        <button className="parcour-btn green">LEVÉE DE FONDS</button>
      </div>
    </div>
  );
};
export default Parcours;
