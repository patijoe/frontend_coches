import React from 'react';
import { getMatches, getTeams } from '../../services/request';

const stagesTypes = [
	"1ST_QUALIFYING_ROUND",
  "2ND_QUALIFYING_ROUND",
	"3RD_QUALIFYING_ROUND",
	"3RD_PLACE",
  "FINAL",
  "GROUP_STAGE",
	"PLAY_OFF_ROUND",
	"PRELIMINARY_SEMI_FINAL",
	"PRELIMINARY_FINAL",
  "QUARTER_FINALS",
  "ROUND_OF_16",
  "SEMI_FINALS"
]

class ResultsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			competition: {},
			results: [],
			teams: []
		};
	}

	componentDidMount = async () => {
		const { match: { params: { id } } } = this.props;
		this.getMatchesFetch(id);
		this.getTeamsFetch(id);
	};

	getMatchesFetch(id) {
		getMatches(id).then(data => {
			this.setState({
				results: data.matches,
				competition: data.competition
			}) ;
		});
	}

	getTeamsFetch(id) {
		getTeams(id).then(data => {
			this.setState({
				teams: data.teams
			}) ;
		});
	}

	render() {
		const { competition, results, teams } = this.state;
		console.log('RESULTS', results);
		console.log('COMPETITIOM', competition);
		console.log('TEAMS', teams);

		return (
			<div className="results-container">
				<h1 className="results-title">Results</h1>
				
				<div className="results-match" >
					<table className="results-table">
						{results
						// .some(item => stagesTypes.includes(item.stage))
						.map(item => {
							return(
								<tbody className="results-table-body" key={item.id}>
									<th className="results-table-body-row">
										<td className="results-table-body-data">
											<div className="results-team  results-first-team">
												<h2 className="results-team-name">{item.homeTeam.name}</h2>
											</div>
										</td>
										<td className="results-table-body-goles">
											<div className="results-goles">
												<h2 className="results-team-goles">{item.score.fullTime.homeTeam}</h2>
												<h2 className="results-team-goles">{item.score.fullTime.awayTeam}</h2>
											</div>
										</td>
										<td className="results-table-body-data">
											<div className="results-team results-second-team">
												<h2 className="results-team-name">{item.awayTeam.name}</h2>
											</div>
										</td>
									</th>
								</tbody>
							);
						})}
					</table>
				</div>
			</div>		
		);
	}
}

export default ResultsContainer;
