import React from 'react';
import { getStandings } from '../../services/request';
import SingleListContainer from '../SingleListContainer';

class StandingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      competition: {},
      isListable: false
    }
  }

  componentDidMount = async() => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.getStandingsFetch(id);
  }

  getStandingsFetch(id) {
    getStandings(id)
    .then(data => {
      this.setState({
        standings: data.standings,
        competition: data.competition
      })
    })
  }
  
  hasTable(standing) {
    return (standing && standing.stage === "REGULAR_SEASON") ||
    (standing && standing.stage ==="GROUP_STAGE");
  }

  render() {
    const {  competition, isListable, standings } = this.state;
    
    // console.log('-----1', standings, standings[0]);
    console.log('competition', competition);
    return (
      <div className="app">
        <div className="standings-container">
          <h1 className="standings-title">Standings</h1>
          <h2 className="standing-competition-name">{competition && competition.name}</h2>
          {standings && this.hasTable(standings[0]) ?
            (<div className="standings-list">
              {standings
                .filter(item => item.type === "TOTAL")
                .map(team => {
                  return(
                    <div className="standings-item" key={team.position}>
                      <h2>{team.group}</h2>
                      {team.table.map(item => {
                        return(
                          <div className="standings-table" key={team.position}>
                            <h2>{item.position}</h2>
                            <h2>{item.team.name}</h2>
                            <h2>{item.won}</h2>
                            <h2>{item.draw}</h2>
                            <h2>{item.lost}</h2>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              }
            </div>) :
            "ya veremos"
          }
        </div>
      </div>
    );
  }
}

export default StandingsContainer;