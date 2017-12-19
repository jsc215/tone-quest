import React from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import NavBar from './components/NavBar';
import PedalsIndexContainer from './containers/PedalsIndexContainer';
import PedalShowContainer from './containers/PedalShowContainer';




const App = props => {
  return(
  <div>
    <Router history={browserHistory} >
      <Route path= '/' component={NavBar} >
      <IndexRoute component={PedalsIndexContainer} />
      <Route path='/pedals' component={PedalsIndexContainer} />
      <Route path='/pedals/:id' component={PedalShowContainer} />
      </Route>
    </Router>
  </div>
  );
};
export default App;
