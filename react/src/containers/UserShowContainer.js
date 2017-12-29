import React, { Component } from 'react';
import UserShowTile from '../components/UserShowTile';
import PedalboardTile from '../components/PedalboardTile';
import { Link } from 'react-router';

class UserShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      // pedalboards: []
    };
  }
  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`,{
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
        user: body.user,
        // pedalboards: body.pedalboards
      });

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    // let pedalboards = this.state.pedalboards.map((pedalboard) => {

    return(
      <UserShowTile
        key={this.state.user.id}
        id={this.state.user.id}
        name={this.state.user.first_name}
      />
    )
      return(
        <div>{pedalboards}</div>
      )
    }
  }



  export default UserShowContainer;
