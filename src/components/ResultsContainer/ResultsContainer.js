import React from 'react';
import { Link } from 'react-router-dom';
import { getMatches, getTeams } from '../../services/request';
import { ROUTER_PATH } from '../../constants/router/constantsRoutes';

const stagesTypes = [
  '1ST_QUALIFYING_ROUND',
  '2ND_QUALIFYING_ROUND',
  '3RD_QUALIFYING_ROUND',
  '3RD_PLACE',
  'FINAL',
  'GROUP_STAGE',
  'PLAY_OFF_ROUND',
  'PRELIMINARY_SEMI_FINAL',
  'PRELIMINARY_FINAL',
  'QUARTER_FINALS',
  'ROUND_OF_16',
  'SEMI_FINALS'
];

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
      });
    });
  }

  getTeamsFetch(id) {
    getTeams(id).then(data => {
      this.setState({
        teams: data.teams
      });
    });
  }

  setCompetitionStages(result) {
    const competitionStages = result.reduce((acc, item) => {
      acc[item.stage] = acc[item.stage] || [];
      acc[item.stage].push(item);
      return acc;
    }, {});
    return competitionStages;
  }

  render() {
    const { competition, results, teams } = this.state;

    const competitionStages = this.setCompetitionStages(results);
    const groupResults = key =>
      competitionStages[key].reduce((acc, item) => {
        acc[item.group] = acc[item.group] || [];
        acc[item.group].push(item);
        return acc;
      }, {});

    return (
      <div className="results-container">
        <h1 className="results-title">Results</h1>
        <Link className="back-button" to={ROUTER_PATH}>
          VOLVER
        </Link>
        <div className="results-match">
          <table className="results-table">
            {Object.keys(competitionStages).map(key => {
              console.log('COMP', competitionStages[key]);
              return (
                <div key={key}>
                  <h2>{key === 'GROUP_STAGE' ? 'GROUP STAGE' : ''}</h2>
                  {Object.keys(groupResults(key)).map(item => {
                    console.log('[ITEM]', groupResults(key)[item]);
                    console.log('ITEM]', item);
                    return (
                      <div key={item}>
                        <h2>{item}</h2>
                        {groupResults(key)[item].map(item => {
                          console.log('tabla', item);
                          return (
                            <tbody className="results-table-body" key={item.id}>
                              <tr className="results-table-body-row">
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
                              </tr>
                            </tbody>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default ResultsContainer;
