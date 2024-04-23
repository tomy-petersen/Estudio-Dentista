import React, { useState } from 'react';

function Form({ onAddCard }) {
  const [nombre, setNombre] = useState('');
  const [paisOrigen, setPaisOrigen] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.trim() === '' || paisOrigen.length < 6) {
      setError('Por favor chequea que la información sea correcta');
    } else {
      setError('');
      onAddCard({ nombre, paisOrigen });
      setNombre('');
      setPaisOrigen('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>País de Origen:</label>
        <input
          type="text"
          value={paisOrigen}
          onChange={(e) => setPaisOrigen(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Animal</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Form;


