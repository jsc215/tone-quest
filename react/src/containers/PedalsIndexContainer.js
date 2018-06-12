import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import PedalTile from '../components/PedalTile';
import SelectField from '../components/SelectField';


class PedalsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedals: [],
      initialPedals: [],
      effectOption: '',
      currentUser: null,
      currentPage: 1,
      pedalsPerPage: 9
    };
    this.getPedals = this.getPedals.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        pedals: body.pedals,
        initialPedals: body.pedals,
        currentUser: body.current_user
      });
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  componentDidMount() {
    this.getPedals();
  }

  handleChange(event) {
    let initialPedals = this.state.initialPedals;

    if(event.target.value === "") {
      this.setState({ pedals: initialPedals });
    } else {
    let filteredPedals = this.state.initialPedals.filter(pedal => {
        return pedal.effecttype.name === event.target.value;
    });

      this.setState({
        effectOption: event.target.value,
        pedals: filteredPedals,
        currentPage: 1
      });
    }
  }

  handlePagination(event) {
    this.setState({ currentPage: Number(event.target.id) });
  }

  render () {
    const indexOfLastPedal = this.state.currentPage * this.state.pedalsPerPage;
    const indexOfFirstPedal = indexOfLastPedal - this.state.pedalsPerPage;
    const currentPedals = this.state.pedals.slice(indexOfFirstPedal, indexOfLastPedal);

    let pedals = currentPedals.map(pedal => {
      return (
        <PedalTile
          key={pedal.id}
          id={pedal.id}
          pedalName={pedal.name}
          pedalImage={pedal.image_url}
          pedalType={pedal.effecttype.name}
        />
      );
    });
    const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.state.pedals.length / this.state.pedalsPerPage); i++) {
        pageNumbers.push(i);
      }

    const renderPageNumbers = pageNumbers.map(number => {
      let buttonclass;
      if(this.state.currentPage == number) {
        buttonclass = 'custom-button active';
      } else {
        buttonclass = 'custom-button';
      }

      return (
        <div
          className={buttonclass}
          key={number}
          id={number}
          onClick={this.handlePagination}>
          {number}
        </div>
      );
    });

    return (
      <div>
        <div className='grid-x grid-margin-x'>
          <div className="medium-3 large-3 cell">
            <SelectField
              name='effectOption'
              label= 'View All Pedals'
              options= {['Overdrive', 'Distortion', 'Fuzz', 'Modulation', 'Reverb and Delay','Compression', 'Special Effect', 'Octavers and Harmonizers' ]}
              effectOption={this.state.effectOption}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className= "grid-x">
          {pedals}
        </div>
          <div id='pagination'>
            <div id='page-number-container'>
              {renderPageNumbers}
            </div>
          </div>
      </div>
    );
  }
}
export default PedalsIndexContainer;
