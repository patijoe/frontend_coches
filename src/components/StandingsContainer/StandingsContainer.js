import React from 'react';
import TableContainer from '../TableContainer';
import { getStandings } from '../../services/request';

class StandingsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			standings: [],
			competition: {},
			isListable: false
		};
	}

	componentDidMount = async () => {
		const { match: { params: { id } } } = this.props;
		this.getStandingsFetch(id);
	};

	getStandingsFetch(id) {
		getStandings(id).then(data => {
			this.setState({
				standings: data.standings,
				competition: data.competition
			});
		});
	}

	hasTable(standing) {
		return (standing && standing.stage === 'REGULAR_SEASON') || (standing && standing.stage === 'GROUP_STAGE');
	}

	render() {
		const { competition, standings } = this.state;

		console.log('competition', competition);
		return (
			<div className="app">
				<div className="standings-container">
					<div className="standing-container-header">
						<h1 className="standings-title">Standings</h1>
						<h2 className="standings-competition-name">{competition && competition.name}</h2>
					</div>
					<div className="standings-tables">
						{standings && this.hasTable(standings[0]) ? standings.filter(item => item.type === 'TOTAL').map(team => <TableContainer team={team} />) : 'ya veremos'}
					</div>
				</div>
			</div>
		);
	}
}

export default StandingsContainer;
