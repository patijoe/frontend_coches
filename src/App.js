import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompetitionsContainer from './components/CompetitionsContainer/index.js';
import ResultsContainer from './components/ResultsContainer/index.js';
import StandingsContainer from './components/StandingsContainer/index.js';
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
				<Route exact path={ROUTER_PATH} render={() => <CompetitionsContainer competitions={competitions} />} />
				<Route exact path={ROUTER_STANDINGS} render={routerProps => <StandingsContainer match={routerProps.match} />} />
				<Route exact path={ROUTER_RESULTS} render={routerProps => <ResultsContainer match={routerProps.match} />} />
			</Switch>
		);
	}
}

export default App;
