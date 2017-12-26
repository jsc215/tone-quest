import React from 'react';


const UserShowTile = props => {
  return(
    <div>
    <p>Pedals{props.name}</p>
    <p>{props.pedalboardName}</p>

  </div>
  )
}


export default UserShowTile;
