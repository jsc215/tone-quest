import React, { Component } from 'react';
import PedalTile from '../components/PedalTile';
import {browserHistory, Link} from 'react-router';
import PedalFormContainer from './PedalFormContainer';

class PedalsIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedals: []
    };
      // this.handleClick = this.handleClick.bind(this);
  }
  getPedals() {
    fetch(`/api/v1/pedals`,{
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


  componentDidMount () {
    this.getPedals();
  }
    render() {

      let pedals = this.state.pedals.map(pedal=>{
        return(
          <PedalTile
            key={pedal.id}
            id={pedal.id}
            pedalName={pedal.name}
            pedalImage={pedal.image_url}
            pedalType={pedal.effecttype.name}
          />
        );
      });
        return (
          <div className= "grid-x">
              {pedals}
            </div>

        );
      }
    }
export default PedalsIndexContainer;
