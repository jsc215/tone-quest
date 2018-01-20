import React, { Component } from 'react';
import PedalboardShowTile from '../components/PedalboardShowTile';
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import { Link, browserHistory } from 'react-router';

class PedalboardShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedalboard: {},
      boardpedals: [],
      pedalboardpedals: [],
      activeDrags: 0,
      currentPositions: [],
      deltaPosition: {
       x: 0, y: 0
     },
     controlledPosition: {
       x: -400, y: 200
       // x: 0, y: 0
     }
   };
   this.onStart = this.onStart.bind(this);
   this.onStop = this.onStop.bind(this);
   this.onControlledDrag = this.onControlledDrag.bind(this);
   this.onControlledDragStop = this.onControlledDragStop.bind(this);
   this.onSave = this.onSave.bind(this);

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
    // debugger
    let pedalboardpedals = this.state.pedalboardpedals
    let index = -1
    for(let i = 0; i < pedalboardpedals.length; i++){
      if(pedalboardpedals[i].name === e.target.textContent){
        index = i
        break;
      }
    }

    let currentPositions = this.state.currentPositions
    // debugger
    currentPositions[index] = {x: position.x, y: position.y}

    this.onControlledDrag(e, position);
    this.setState({
      currentPositions: currentPositions
    })
    this.onStop();
  }

  onSave(){
    this.state.boardpedals.map((boardpedal, i) =>{
      boardpedal.x = this.state.currentPositions[i].x
      boardpedal.y = this.state.currentPositions[i].y

      fetch(`/api/v1/boardpedals/${boardpedal.id}`, {
        credentials: 'same-origin',
        method: 'PATCH',
        body: JSON.stringify(boardpedal),
        headers: {'Content-Type': 'application/json'}
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
        browserHistory.push(`/pedalboards/${this.props.params.id}`);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

    })
    alert('saved')
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

      let currentPositions = body.boardpedals.map((boardpedal) =>{
        return {x: boardpedal.x, y: boardpedal.y}
      })

      this.setState({
        pedalboard: body.pedalboard,
        pedalboardpedals: body.pedals,
        boardpedals: body.boardpedals,
        currentPositions: currentPositions
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render () {
    const dragHandlers = {onStart: this.onControlledDrag, onStop: this.onControlledDragStop};
    const {deltaPosition, controlledPosition} = this.state;
    let pedalBoardPedals = this.state.pedalboardpedals.map((pedal, i) =>{
      return(

        <Draggable
          position={{x: this.state.currentPositions[i].x, y: this.state.currentPositions[i].y}} {...dragHandlers}
          key={pedal.id}>
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

    return (
      <div className='grid-x'>
        <span id='save-button' className ='hollow button hvr-pulse-shrink' onClick={this.onSave}>Save this layout!</span>
      <div className="pedalboard">
        {pedalBoardPedals}
      </div>
    </div>
    );
  }
}

export default PedalboardShowContainer;
