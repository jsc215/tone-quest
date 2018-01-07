import React, { Component } from 'react';
// import PedalboardTile from '../components/PedalboardTile';
import PedalboardShowTile from '../components/PedalboardShowTile';
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import { Link } from 'react-router';

class PedalboardShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedalboard: {},
      pedalboardpedals: [],
      activeDrags: 0,
      deltaPosition: {
       x: 0, y: 0
     },
     controlledPosition: {
       x: -400, y: 200
     }
   };
 }

 handleDrag(e, ui) {
   const {x, y} = this.state.deltaPosition;
   this.setState({
     deltaPosition: {
       x: x + ui.deltaX,
       y: y + ui.deltaY
     }
   });
 }

 onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }


  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }


  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  }

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
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

        <Draggable key={pedal.id}>
          <div className='pedalBoardTile'>
            <PedalboardShowTile
              id={pedal.id}
              pedalImage={pedal.image_url}
              pedalName={pedal.name}
            />
          </div>
        </Draggable>
      );
    });
    
    return pedalBoardPedals;
  }

  render () {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    return (
      <div className="pedalboard">
        {this.mapBoardPedals()}
      </div>
    );
  }
}

export default PedalboardShowContainer;
