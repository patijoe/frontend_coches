import React from 'react';

class ResultTableComponent extends React.Component {
  render() {
    const { item } = this.props;
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
  }
}

export default ResultTableComponent;
