import React, { Component } from 'react';
import { Route, Redirect, browserHistory } from 'react-router';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextArea from '../components/TextArea';

class PedalReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      comment: '',
      pedal_id: this.props.routeParams.id,
      errors: []
    };
    this.addNewPedalReview = this.addNewPedalReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      rating: this.state.rating,
      comment: this.state.comment,
      pedal_id: this.state.pedal_id
    };
    console.log(formPayload);
    this.addNewPedalReview(formPayload);
    this.handleClearForm(event);
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      let func;
      response.status < 400 ? func = resolve : func = reject;
      response.json().then(data => func({'status': response.status,
                                         'statusText': response.statusText,
                                         'data': data
                                       })
                          );
    });
  }

  addNewPedalReview(newPedalReview) {
    fetch('/api/v1/pedalreviews', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newPedalReview),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => this.processResponse(response))
    .then(body => {
      browserHistory.push(`/pedals/${this.state.pedal_id}`);
    })
    .catch(response => {
      this.setState({
        errors: response.data.errors
      });
      let errorMessage = `${response.status} (${response.statusText})`;
      console.error(`Error in fetch: ${errorMessage}`);
    });
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      rating: '',
      comment: ''
    });
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className='row'>
          <div className='six columns'>
          {/* <div id='errors'>{this.state.errors}</div> */}
          <SelectField
            content={this.state.rating}
            label="Rating*"
            name="rating"
            options={[1, 2, 3, 4, 5]}
            onChange={this.handleChange}
          />
          <TextArea
            content={this.state.comment}
            label="Review"
            name="comment"
            onChange={this.handleChange}
          />
          <div>
            <a className="button tiny" onClick={this.handleClearForm} >Clear</a>
            <input className="button tiny" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </form>
    );
  }
}
export default PedalReviewFormContainer;
