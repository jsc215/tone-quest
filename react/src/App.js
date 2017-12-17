import React from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import NavBar from './components/NavBar';
import PedalsIndexContainer from './containers/PedalsIndexContainer';
import PedalTile from './components/PedalTile';



const App = props => {
  return(
  <div>
    <Router history={browserHistory} >
      <Route path= '/' component={NavBar} >
      <Route path='/pedals' component={PedalsIndexContainer} />
        <IndexRoute component={PedalsIndexContainer} />
      </Route>
    </Router>
  </div>
  )
}
export default App;
