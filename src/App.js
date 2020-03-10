import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompetitionsComponent from './components/CompetitionsComponent/index.js';
import ResultsComponent from './components/ResultsComponent/index.js';
import StandingsComponent from './components/StandingsComponent/index.js';
import { getCompetitions } from './services/request';
import { ROUTER_PATH, ROUTER_STANDINGS, ROUTER_RESULTS } from './constants/router/constantsRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      count: 0,
      teams: []
    };
  }

  componentDidMount = () => {
    this.getCompetitionsFetch();
  };

  getCompetitionsFetch() {
    getCompetitions().then(data => {
      this.setState({
        competitions: data.competitions,
        count: data.count
      });
    });
  }

  render() {
    const { competitions } = this.state;
    return (
      <Switch>
        <Route exact path={ROUTER_PATH} render={() => <CompetitionsComponent competitions={competitions} />} />
        <Route exact path={ROUTER_STANDINGS} render={routerProps => <StandingsComponent match={routerProps.match} />} />
        <Route exact path={ROUTER_RESULTS} render={routerProps => <ResultsComponent match={routerProps.match} />} />
      </Switch>
    );
  }
}

export default App;
