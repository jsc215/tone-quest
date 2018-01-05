import React, { Component } from 'react';
import PedalShowTile from '../components/PedalShowTile';
import PedalReviewTile from '../components/PedalReviewTile';
import { Link } from 'react-router';

class PedalShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedal: {},
      pedalreviews: []
    };
  }
  componentDidMount() {
    fetch(`/api/v1/pedals/${this.props.params.id}`,{
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      body.pedal.effecttypename= body.effecttypename;

      this.setState({
        pedal: body.pedal,
        pedalreviews: body.pedalreviews
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  mapPedalReviews() {
    let pedalreviews = this.state.pedalreviews.map(pedalreview => {
      return(

        <PedalReviewTile
          key={pedalreview.id}
          id={pedalreview.id}
          rating={pedalreview.rating}
          comment={pedalreview.comment}
          user={pedalreview.user}
        />

      );
});

  return pedalreviews;
}

  render () {

    return (

      <div>
        <PedalShowTile
          key={this.state.pedal.id}
          id={this.state.pedal.id}
          pedalName={this.state.pedal.name}
          pedalType={this.state.pedal.effecttypename}
          pedalImage={this.state.pedal.image_url}
          pedalDescription={this.state.pedal.description}
        />

          <h2>Reviews:</h2><Link to={`/pedals/${this.state.pedal.id}/pedalreviews/new`} id='add-review-button'>+ Add Review</Link>
          <div className='review-box'>
          {this.mapPedalReviews()}
        </div>
        </div>



    );
  }
}

export default PedalShowContainer;
