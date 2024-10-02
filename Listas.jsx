import React from 'react';

function Car(props) {
  return <li>Eu tenho um {props.brand}</li>;
}

function Food(props) {
  return <li>Está faltando {props.food}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Alfa Romeo' }
  ];

  const foods = [
    { id: 1, food: 'Abacate' },
    { id: 2, food: 'Pastel' },
    { id: 3, food: 'Arroz' }
  ];

  return (
    <>
      <h1>Minha garagem</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>

      <h1>Lista de Compras</h1>
      <ul>
        {foods.map((foodItem) => (
          <Food key={foodItem.id} food={foodItem.food} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
