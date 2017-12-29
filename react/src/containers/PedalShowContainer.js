import React, { Component } from 'react';
import PedalShowTile from '../components/PedalShowTile';
import { Link } from 'react-router';

class PedalShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedal: {}
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

      this.setState({ pedal: body.pedal });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render () {

    return (
        <PedalShowTile
          key={this.state.pedal.id}
          id={this.state.pedal.id}
          pedalName={this.state.pedal.name}
          pedalType={this.state.pedal.effecttypename}
          pedalImage={this.state.pedal.image_url}
          pedalDescription={this.state.pedal.description}
        />
    );
  }
}

export default PedalShowContainer;
