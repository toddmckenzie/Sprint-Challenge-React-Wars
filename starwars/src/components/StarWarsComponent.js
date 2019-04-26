import React from 'react';
import StarWarsGuy from './StarWarsGuy';

const StarWarsComponent = props => {
  return (
    <div className="flex">{props.data.map(item =>
      <StarWarsGuy item={item} key={Math.random()*1000000} />
    )}</div>
  )

}

export default StarWarsComponent
