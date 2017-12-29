import React, { Component } from 'react';
import { Route, link, browserHistory } from 'react-router';
import TextField from '../components/TextField';

class PedalboardFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  addNewPedalboard(newPedalboard) {
    fetch('/api/v1/pedalboards', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newPedalboard),
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
      browserHistory.push(`/pedalboards`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  updatePedal(newPedalboard) {
    fetch(`/api/v1/pedals/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newPedalboard),
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
      browserHistory.push(`/pedalboards/${this.state.pedalboard_id}`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name
    };
    if(this.props.params.id){
      this.updatePedal(formPayload);
    } else {
    this.addNewPedalboard(formPayload);
  }
}
  render(){
    return(
      <div className='pedalboard-form'>
        <form className='new-pedal-form callout' onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <div className='six columns'>
              <TextField
                content={this.state.name}
                label="Pedalboard Name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <input className="button tiny" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default PedalboardFormContainer;
