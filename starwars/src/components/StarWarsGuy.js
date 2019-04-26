import React from 'react';




const StarWarsGuy = props => {
  console.log(props.item)
  return (
    <div className="card">
      <p>{props.item.name}</p>
      <p>{props.item.height}</p>
    </div>
  )
}



export default StarWarsGuy;
