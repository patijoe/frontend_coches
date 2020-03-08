import React from "react";
import { getStandings } from "../../services/request";

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
    const {
      match: {
        params: { id }
      }
    } = this.props;
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
    return (
      (standing && standing.stage === "REGULAR_SEASON") ||
      (standing && standing.stage === "GROUP_STAGE")
    );
  }

  render() {
    const { competition, standings } = this.state;

    // console.log('-----1', standings, standings[0]);
    console.log("competition", competition);
    return (
      <div className="app">
        <div className="standings-container">
          <h1 className="standings-title">Standings</h1>
          <h2 className="standing-competition-name">
            {competition && competition.name}
          </h2>
          {standings && this.hasTable(standings[0]) ? (
            standings
              .filter(item => item.type === "TOTAL")
              .map(team => (
                <React.Fragment>
                  <h2>{team.group}</h2>
                  <table className="standings-table">
                    <thead className="standings-table-head">
                      <tr className="standings-table-head-row">
                        <th className="standings-table-head-item">position</th>
                        <th className="standings-table-head-item">name</th>
                        <th className="standings-table-head-item">MW</th>
                        <th className="standings-table-head-item">MD</th>
                        <th className="standings-table-head-item">ML</th>
                      </tr>
                    </thead>
                    <tbody className="standings-table-body">
                      {team.table.map(item => {
                        return (
                          <tr
                            className="standings-table-body-row"
                            key={team.position}
                          >
                            <td className="standings-table-body-data">
                              {item.position}
                            </td>
                            <td className="standings-table-body-data">
                              {item.team.name}
                            </td>
                            <td className="standings-table-body-data">
                              {item.won}
                            </td>
                            <td className="standings-table-body-data">
                              {item.draw}
                            </td>
                            <td className="standings-table-body-data">
                              {item.lost}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </React.Fragment>
                )
              )
          ) : (
            "ya veremos"
          )}
        </div>
      </div>
    );
  }
}

export default StandingsContainer;
