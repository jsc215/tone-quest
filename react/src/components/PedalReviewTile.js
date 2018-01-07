import React from 'react';

const PedalReviewTile = props => {
  return(
    <div className= 'reviewTile'>
      <p>Rating: {props.rating}/5</p>
      <p>{props.comment}</p>
      <p id='review-by'>Reviewed by: {props.user}</p><hr/>
    </div>
  );
};

export default PedalReviewTile;
