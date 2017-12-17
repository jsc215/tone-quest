import React, { Component } from 'react';
import PedalTile from '../components/PedalTile';
import { Route, IndexRoute, Router, browserHistory, Link} from 'react-router';

class PedalsIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedals: []
    };
  }

  componentDidMount () {
    fetch('/api/v1/pedals')
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
    let pedals = this.state.pedals.map(pedal=>{
      return(
        <PedalTile
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
