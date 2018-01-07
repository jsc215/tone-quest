import React, { Component } from 'react';
import PedalShowTile from '../components/PedalShowTile';
import PedalReviewTile from '../components/PedalReviewTile';
import { Link } from 'react-router';

class PedalShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedal: {},
      pedalreviews: [],
      pedalreviewnames: []
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
        pedalreviews: body.pedalreviews,
        pedalreviewnames: body.pedalreviewnames
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  mapPedalReviews() {
    let pedalreviews = this.state.pedalreviews.map((pedalreview, i) => {
      return(

        <PedalReviewTile
          key={pedalreview.id}
          id={pedalreview.id}
          rating={pedalreview.rating}
          comment={pedalreview.comment}
          user={this.state.pedalreviewnames[i]}
        />
      );
    });

  return pedalreviews;
  
  }

  render () {
    return(
      <div className='row'>
        <div className= 'column small-6'>
          <PedalShowTile
            key={this.state.pedal.id}
            id={this.state.pedal.id}
            pedalName={this.state.pedal.name}
            pedalType={this.state.pedal.effecttypename}
            pedalImage={this.state.pedal.image_url}
            pedalDescription={this.state.pedal.description}
          />
        </div>

        <div className='column small-6'>
          <div id='review-box'>
            <span>Reviews:</span>
            <Link to={`/pedals/${this.state.pedal.id}/pedalreviews/new`} id='add-review-button' className='hvr-pulse-shrink'>Add a Review</Link>
            {this.mapPedalReviews()}
          </div>
        </div>
      </div>
    );
  }
}

export default PedalShowContainer;
