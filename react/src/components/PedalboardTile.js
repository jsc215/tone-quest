import React from 'react';
import { Link } from 'react-router';


const PedalboardTile = props => {
  return(

    <div className="small-6 medium-4 large-4 cell pedalTile">
      <Link to={`/pedals/${props.id}`}><img src={props.pedalImage}></img></Link>
      <Link to={`/pedalboards/${props.id}`}><p>{props.pedalboardName}</p></Link>
      <p>{props.pedalName}</p>
      <p>{props.userName}</p>
    </div>


  );
};

export default PedalboardTile;
