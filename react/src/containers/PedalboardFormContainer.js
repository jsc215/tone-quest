import React, { Component } from 'react';
import { Route, link, browserHistory } from 'react-router';
import TextField from '../components/TextField';
import Select from 'react-select';
import { Async } from 'react-select';


class PedalboardFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      pedals: [],
      selectedOption: 0
    };

    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePedalChange = this.handlePedalChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.setPedalId = this.setPedalId.bind(this);
  }
  setPedalId(pedal){ this.setState({  pedal_id: pedal.value }) };

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      selectedOption: {}
    });
  }

  handlePedalChange(selectedOption){
    this.setState({ selectedOption });
    this.setPedalId(selectedOption);
    console.log(`Selected: ${selectedOption.label} pedal_id: ${selectedOption.value}`);
  }

  componentDidMount(){
    this.getOptions();
  }

  getOptions() {
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
    }
  )
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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

  // updatePedal(newBoardPedal) {
  //   fetch(`/api/v1/`, {
  //     credentials: 'same-origin',
  //     method: 'POST',
  //     body: JSON.stringify(newPedalboard),
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     browserHistory.push(`/pedalboards/${this.state.pedalboard_id}`);
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  // }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      pedal: this.state.selectedOption
    };
    if(this.props.params.id){
      this.updatePedal(formPayload);
    } else {
      this.addNewPedalboard(formPayload);
    }
  }
  render(){
    const{pedals} = this.state;
    let pedalOptions;
    let options = []
    pedalOptions = pedals.map((pedal) => {
      options.push({value: pedal.id, label: pedal.name})
    });

    return(
        <form onSubmit={this.handleFormSubmit}>
          <div className='callout'>
            <div className='six columns'>
              <TextField
                content={this.state.name}
                label="Pedalboard Name"
                name="name"
                onChange={this.handleChange}
              />
              <Select
                placeholder='Select a Pedal'
                name="form-field-name"
                value={this.state.selectedOption.value}
                onChange={this.handlePedalChange}
                options={options}
              />
            </div>
          </div>

          <div className="row">
            <a className="button tiny" onClick={this.handleClearForm}>Clear</a>
            <input className="button tiny" type="submit" value="Submit" />
          </div>
        </form>
    );
  }
}
export default PedalboardFormContainer;








































//
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     let newKey = event.target.name;
//     let newValue = event.target.value;
//     this.setState({
//       [newKey]: newValue
//     });
//   }
//
//   addNewPedalboard(newPedalboard) {
//     fetch('/api/v1/pedalboards', {
//       credentials: 'same-origin',
//       method: 'POST',
//       body: JSON.stringify(newPedalboard),
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = `${response.status} (${response.statusText})`,
//         error = new Error(errorMessage);
//         throw(error);
//       }
//     })
//     .then(response => response.json())
//     .then(body => {
//       browserHistory.push(`/pedalboards`);
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
//     }
//
//   updatePedal(newPedalboard) {
//     fetch(`/api/v1/pedals/${this.props.params.id}`, {
//       credentials: 'same-origin',
//       method: 'PATCH',
//       body: JSON.stringify(newPedalboard),
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = `${response.status} (${response.statusText})`,
//         error = new Error(errorMessage);
//         throw(error);
//       }
//     })
//     .then(response => response.json())
//     .then(body => {
//       browserHistory.push(`/pedalboards/${this.state.pedalboard_id}`);
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//   handleFormSubmit(event) {
//     event.preventDefault();
//     let formPayload = {
//       name: this.state.name
//     };
//     if(this.props.params.id){
//       this.updatePedal(formPayload);
//     } else {
//     this.addNewPedalboard(formPayload);
//   }
// }
//   render(){
//     return(
//       <div className='pedalboard-form'>
//         <form className='new-pedal-form callout' onSubmit={this.handleFormSubmit}>
//           <div className='row'>
//             <div className='six columns'>
//               <TextField
//                 content={this.state.name}
//                 label="Pedalboard Name"
//                 name="name"
//                 onChange={this.handleChange}
//               />
//             </div>
//           </div>
//
//           <div className="row">
//             <input className="button tiny" type="submit" value="Submit" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default PedalboardFormContainer;
