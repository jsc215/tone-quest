// import React, { Component } from 'react';
// import { Link } from 'react-router';
// import Select from 'react-select';
// import { Async } from 'react-select';
//
//
// class PedalboardDropDown extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       pedals:[],
//       selectedOption: {}
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.getOptions = this.getOptions.bind(this);
//   }
//
//   handleChange(selectedOption){
//   this.setState({ selectedOption });
//   this.props.setPedalId(selectedOption);
//   console.log(`Selected: ${selectedOption.label} pedal_id: ${selectedOption.value}`);
// }
//
//   componentDidMount(){
//     this.getOptions();
//   }
//     getOptions() {
//       fetch('/api/v1/pedals')
//       .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//           error = new Error(errorMessage);
//           throw(error);
//         }
//       })
//       .then(response => response.json())
//       .then(body => {
//         this.setState({
//           pedals: body.pedals
//         })
//       }
//     )
//       .catch(error => console.error(`Error in fetch: ${error.message}`));
//     }
//
//
//     render() {
//       const{pedals} = this.state;
//       let pedalOptions;
//       let options = []
//       pedalOptions = pedals.map((pedal) => {
//         options.push({value: pedal.id, label: pedal.name})
//
//       })
//        return (
//          <div>
//            <Select
//              name="form-field-name"
//              value={this.state.selectedOption.value}
//              onChange={this.handlePedalChange}
//              options={options}
//            />
//          </div>
//        );
//      }
//
//   }
//   export default PedalboardDropDown;
