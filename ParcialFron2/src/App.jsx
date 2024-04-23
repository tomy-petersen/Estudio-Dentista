import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Card from './Card';

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div className='App'>
      <h1>Registro de Animales</h1>
      <Form onAddCard={addCard} />
      <div className='card-container'>
        {cards.map((card, index) => (
          <Card key={index} nombre={card.nombre} paisOrigen={card.paisOrigen} />
        ))}
      </div>
    </div>
  );
}

export default App;




