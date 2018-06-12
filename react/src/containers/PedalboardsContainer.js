import React, { Component } from 'react';
import PedalboardTile from '../components/PedalboardTile';
import {browserHistory, Link} from 'react-router';

class PedalboardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedalboards: []
    };
  }
  getPedalboards() {
    fetch(`/api/v1/pedalboards`,{
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
        pedalboards: body.pedalboards
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getPedalboards();
  }

  render() {
    let pedalboards = this.state.pedalboards.map(pedalboard => {
      return(
        <PedalboardTile
          key={pedalboard.id}
          id={pedalboard.id}
          pedalboardName={pedalboard.name}
          // userName={`${pedalboard.user.first_name} ${pedalboard.user.last_name}`}
        />
      );
    });

    return (
      <div className= 'grid-x'>
        {pedalboards}
      </div>
    );
  }
}

export default PedalboardsContainer;
