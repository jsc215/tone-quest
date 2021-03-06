import React, { Component } from 'react';
import { Route, link, browserHistory } from 'react-router';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';

class PedalFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pedalType: '',
      pedalDescription:'',
      pedalImage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  addNewPedal(newPedal) {
  fetch('/api/v1/pedals', {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(newPedal),
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
    browserHistory.push(`/pedals`);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updatePedal(newPedal) {
    fetch(`/api/v1/pedals/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newPedal),
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
      browserHistory.push(`/pedals`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      effecttype_id: this.state.pedalType,
      description: this.state.pedalDescription,
      image_url: this.state.pedalImage
    };
    if(this.props.params.id){
      this.updatePedal(formPayload);
    } else {
    this.addNewPedal(formPayload);

    this.handleClearForm(event);
  }
}

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      pedalType:'',
      pedalDescription: '',
      pedalImage: ''
    });
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className='row'>
            <TextField
              content={this.state.name}
              label="Pedal Name"
              name="name"
              onChange={this.handleChange}
            />
            <SelectField
              effectOption={this.state.pedalType}
              label="Choose Effect Type"
              name="pedalType"
              options={['Overdrive', 'Distortion', 'Fuzz', 'Modulation', 'Reverb and Delay','Compression', 'Special Effect', 'Octavers and Harmonizers' ]}
              onChange={this.handleChange}
            />
            <TextField
              content={this.state.pedalDescription}
              label="Description"
              name="pedalDescription"
              onChange={this.handleChange}
            />
            <TextField
              content={this.state.pedalImage}
              label="Image Url"
              name="pedalImage"
              onChange={this.handleChange}
            />
        </div>
        <div className="row">
          <a className="button tiny" onClick={this.handleClearForm}>Clear</a>
          <input className="button tiny" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
export default PedalFormContainer;
