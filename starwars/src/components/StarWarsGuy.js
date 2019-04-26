import React from 'react';
import './StarWars.css';



const StarWarsGuy = props => {
  return (
      <div className="card">
        <h2>{props.item.name}</h2>
        <p>Birthday: {props.item.birth_year}</p>
        <p>Height: {props.item.height}</p>
        <p>Mass: {props.item.mass}</p>
      </div>
    )
}



export default StarWarsGuy;
