import React, { Component } from 'react';
import PedalboardShowTile from '../components/PedalboardShowTile';
import PedalboardTile from '../components/PedalboardTile';

import { Link } from 'react-router';

class PedalboardShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedalboard: {},
      pedalboardpedals: []

    };
  }

  componentDidMount() {
    fetch(`/api/v1/pedalboards/${this.props.params.id}`,{
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
        pedalboard: body.pedalboard,
        pedalboardpedals: body.pedalboardpedals

      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  mapBoardPedals(){
    let pedalBoardPedals = this.state.pedalboardpedals.map(pedal =>{
      return(

        <PedalboardTile
          key={pedal.id}
          id={pedal.id}
          pedalImage={pedal.image_url}
          pedalName={pedal.name}
          name={this.state.pedalboard.name}

        />
      );
    });

    return pedalBoardPedals;
  }

  render () {

    return (
      <div>
        <PedalboardShowTile
          key={this.state.pedalboard.id}
          id={this.state.pedalboard.id}
          pedalboardName={this.state.pedalboard.name}
        />

      <div className='grid-x'>
        {this.mapBoardPedals()}
        </div>
      </div>
    );
  }
}

export default PedalboardShowContainer;
