import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompetitionsContainer from './components/CompetitionsContainer/index.js';
import TeamsContainer from './components/TeamsContainer/index.js';
import StandingsContainer from './components/StandingsContainer/index.js';
import { getCompetitions, getTeams } from './services/request';
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
      count: 0,
      teams: []
    }
  }

  componentDidMount = async() => {
    this.getCompetitionsFetch();
    this.getTeamsFetch();
  }

  getCompetitionsFetch(event) {
    getCompetitions()
    .then(data => {
      this.setState({
        competitions: data.competitions,
        count: data.count
      })
    })
  }

  getTeamsFetch() {
    getTeams(2001)
    .then(data => {
      this.setState({
        teams: data.teams
      })
    })
  }

  render() {
    const { competitions} = this.state;
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
