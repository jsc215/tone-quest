import React, { Component } from 'react';
import PedalTileComponent from '../Components/PedalTileComponent';


class PedalsIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedals: []
    };
  }

  componentDidMount () {
    fetch('/api/v1/pedals',{
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
      this.setState({
        pedals: body.pedals
      });
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}
  render() {

    let pedals = this.state.pedals.map(pedal => {
      return (
        <PedalTileComponent
          key={pedal.id}
          id={pedal.id}
          pedalName={pedal.name}
          pedalImage={pedal.image_url}
          pedalType={pedal.effect_type}
        />
      );
    });

    return (
      <div>
        {pedals}
      </div>
    );
  }
}



export default PedalsIndexContainer;
