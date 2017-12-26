import React from 'react';
import { Link } from 'react-router'



const PedalboardTile = props => {
  return(
      <div className="flex">
        <div className= "small-6 medium-3 large-3 cell pedalboardTile">
        <ul>
          <Link to={`/pedalboards/${props.id}`}>
            <p>{props.pedalboardName}</p></Link>
          </ul>
        </div>
      </div>
  )
}

export default PedalboardTile;
