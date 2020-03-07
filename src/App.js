import React from 'react';
import { getCompetitions } from './service/service';
import { Switch, Route } from 'react-router-dom';
import CompetitionsContainer from './components/CompetitionsContainer/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: {}
    }
  }

  componentDidMount = async() => {
    const competitions = await getCompetitions();
    this.setState({
      competitions
    });
  }

  getCompetitionsFetch() {
    getCompetitions()
    .then(data => {
      this.setState({
        competitions: data
      })
    })
  }

  render() {
    console.log('COMPETITIONS', this.state.competitions);
    return(
      <Switch>

        <Route 
          exact path = "/"
          render={() => (
            <CompetitionsContainer
            />
          )}
        />
    </Switch>
    );
  }
}

export default App;
