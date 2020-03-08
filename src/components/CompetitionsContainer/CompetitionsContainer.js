import React from "react";
import { Link } from "react-router-dom";

import { ROUTER_STANDINGS_LINK } from "../../constants/router/constantsRoutes";

class CompetitionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitionSelected: 0
    };
  }

  selectCompetition = id => {
    console.log("PACO", id);
    this.setState({
      competitionSelected: id
    });
  };

  render() {
    const { competitions } = this.props;
    const { competitionSelected } = this.state;
    console.log("selecCOMP", competitionSelected);
    console.log("COMP", competitions);

    return (
      <div className="app">
        <div className="competitions-container">
          <h1 className="competitions-title">Competitions</h1>
          <ul className="competitions-list">
            {competitions &&
              competitions.map(competition => {
                return (
                  <li
                    className="competitions-item"
                    key={competition.id}
                    onClick={() => this.selectCompetition(competition.id)}
                  >
                    <div className="competitions-item-container">
                      <Link
                        className="competitions-link"
                        to={ROUTER_STANDINGS_LINK(`${competition.id}`)}
                      >
                        <div className="competitions-link-block competitions-link-block-name">
                          <h2 className="competitions-link-block-title">
                            Name
                          </h2>
                          <h3 className="competitions-link-block-name">
                            {competition.name}
                          </h3>
                        </div>
                        <div className="competitions-link-block competitions-link-block-country">
                          <h2 className="competitions-link-block-title">
                            Country
                          </h2>
                          <h2 className="competitions-link-block-country">
                            {competition.area.name}
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CompetitionsContainer;
