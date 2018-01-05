import React from 'react';
import { Link } from 'react-router';


const PedalboardTile = props => {
  return(


      <div className= 'small-12 medium-4 large-3 cell pedalBoardTile'>
        <Link to={`/pedalboards/${props.id}`}><p>{props.pedalboardName}</p></Link>
          <p>{props.pedalName}</p>
        </div>


        // </div>






  );
};

export default PedalboardTile;
