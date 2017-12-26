import React, { Component } from 'react';
import UsersIndexTile from '../components/UsersIndexTile';
import { Link } from 'react-router';


class UsersIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
    componentDidMount() {
      fetch(`/api/v1/users`,{
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
          users: body.users
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
    render(){
      let users = this.state.users.map(user => {
        return(
          <UsersIndexTile
            key={user.id}
            id={user.id}
            userName={`${user.first_name} ${user.last_name}`}
          />

        )
      })
      return(
        <div>{users}</div>
      )
    }
  }



export default UsersIndexContainer;
