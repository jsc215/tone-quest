import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import PedalsIndexContainer from './containers/PedalsIndexContainer';
import PedalShowContainer from './containers/PedalShowContainer';
import PedalFormContainer from './containers/PedalFormContainer';
import PedalboardsContainer from './containers/PedalboardsContainer';
import PedalboardShowContainer from './containers/PedalboardShowContainer';
import PedalboardFormContainer from './containers/PedalboardFormContainer';
import PedalReviewFormContainer from './containers/PedalReviewFormContainer';

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          <IndexRoute component={PedalsIndexContainer} />
          <Route path="/pedals" component={PedalsIndexContainer} />
          <Route path="/pedals/new" component={PedalFormContainer} />
          <Route path="/pedals/:id" component={PedalShowContainer} />
          <Route path="/pedalboards" component={PedalboardsContainer} />
          <Route path="/pedalboards/new" component={PedalboardFormContainer} />
          <Route path="/pedals/:id/pedalreviews/new" component={PedalReviewFormContainer} />
          <Route path="/pedalboards/:id" component={PedalboardShowContainer} />
        </Route>
      </Router>
    </div>
  );
};
export default App;
