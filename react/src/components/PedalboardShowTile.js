import React from 'react';
import { Link} from 'react-router';

  const PedalboardShowTile = props => {
    return(
        <div className= 'small-3, medium-3 large-3 cell'>
            <Link to={`/pedalboards`}>
              <p>{props.pedalboardName}</p></Link>
              <p>{props.pedalboardUser}</p>
           </div>
    );
  };





export default PedalboardShowTile;
