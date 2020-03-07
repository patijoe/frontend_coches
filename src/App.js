import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompetitionsContainer from './components/CompetitionsContainer/index.js';
import TeamsContainer from './components/TeamsContainer/index.js';
import StandingsContainer from './components/StandingsContainer/index.js';
import { getCompetitions } from './service/service';
import {
  ROUTER_PATH, 
  ROUTER_STANDINGS, 
  ROUTER_TEAM
} from './constants/router/constantsRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      count: 0
    }
  }

  componentDidMount = async() => {
    this.getCompetitionsFetch();
  }

  getCompetitionsFetch() {
    getCompetitions()
    .then(data => {
      this.setState({
        competitions: data.competitions,
        count: data.count
      })
    })
  }

  render() {
    const { competitions } = this.state;
    console.log('COMPETITIONS', competitions);
    return(
      <Switch>

        <Route 
          exact 
          path = {ROUTER_PATH}
          render = {() => (
            <CompetitionsContainer 
              competitions={competitions}
            />
          )}
        />
        <Route
          exact
          path = {ROUTER_STANDINGS}
          render = { (routerProps) => ( 
            <StandingsContainer 
              match = {routerProps.match} 
            /> 
          )}
        />
        <Route
          exact
          path = {ROUTER_TEAM}
          render = { (routerProps) => ( 
            <TeamsContainer 
              match = {routerProps.match} 
            /> 
          )}
        />
      </Switch>
    );
  }
}

export default App;
