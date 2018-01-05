import React from 'react';

const PedalReviewTile = props => {

  // let upVote = () => {
  //   props.upVote(props.id)
  // }
  // let downVote = () => {
  //   props.downVote(props.id)
  // }
  return(
      <div>
      <p>Rating: {props.rating}/5</p>
      <p>{props.comment}</p>
      {/* <h1>{props.user.first_name}</h1> */}
    </div>
      /* <span className='custom-button tile-button' onClick={upVote}><i className="far fa-thumbs-up"></i> Like <span className='numbers'>{props.upvotes}</span></span>
      <span className='custom-button tile-button' onClick={downVote}><i className="far fa-thumbs-down"></i> Dislike <span className='numbers'>{props.downvotes}</span></span> */
  )
}
export default PedalReviewTile;
