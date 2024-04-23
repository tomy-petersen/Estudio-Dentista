import React from 'react';

function Card({ nombre, paisOrigen }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>País de Origen: {paisOrigen}</p>
    </div>
  );
}

export default Card;

