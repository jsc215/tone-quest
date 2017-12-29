import React from 'react';
import { Link } from 'react-router';

const UsersIndexTile = props => {
  return(
    <div>
  <Link to={`/users/${props.id}`}><p>Name: {props.userName}</p></Link>
    <p>{props.pedals}</p>
  </div>
  )
}


export default UsersIndexTile;
