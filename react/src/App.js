import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import PedalsIndexContainer from './containers/PedalsIndexContainer';



const App = props => {
  return(
    <Router history= {browserHistory}>
      <Route path='/'>
        <IndexRoute component={PedalsIndexContainer} />
        <Route path='pedals' component={PedalsIndexContainer} />
      </Route>
    </Router>
  )
}

export default App;
