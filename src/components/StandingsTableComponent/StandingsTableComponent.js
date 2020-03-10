import React from 'react';

class StandingsTableComponent extends React.Component {
  render() {
    const { team } = this.props;
    return (
      <div className="standings-table-complete">
        <h2 className="standings-table-title">{team.group}</h2>
        <table className="standings-table">
          <thead className="standings-table-head">
            <tr className="standings-table-head-row">
              <th className="standings-table-head-item" />
              <th className="standings-table-head-item standings-table-head-item-name">TEAM</th>
              <th className="standings-table-head-item ">MW</th>
              <th className="standings-table-head-item ">MD</th>
              <th className="standings-table-head-item ">ML</th>
            </tr>
          </thead>
          <tbody className="standings-table-body">
            {team.table.map(item => {
              return (
                <tr className="standings-table-body-row" key={team.position}>
                  <td className="standings-table-body-data-position">{item.position}</td>
                  <td className="standings-table-body-data-name">{item.team.name}</td>
                  <td className="standings-table-body-data">{item.won}</td>
                  <td className="standings-table-body-data">{item.draw}</td>
                  <td className="standings-table-body-data">{item.lost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StandingsTableComponent;
