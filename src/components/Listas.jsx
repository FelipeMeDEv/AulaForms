import React from 'react';

function Car(props) {
  return <li>Eu tenho { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Alfa Romeo'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <h1>Carros da garagem</h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

export default Garage