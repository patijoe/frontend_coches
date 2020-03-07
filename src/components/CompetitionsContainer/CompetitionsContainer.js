import React from "react";
import { Link } from "react-router-dom";

import { ROUTER_STANDINGS_LINK } from "../../constants/router/constantsRoutes";

class CompetitionsContainer extends React.Component {
  render() {
    const { competitions } = this.props;
    // console.log('NAME', competitions[0].name);
    console.log("COMP", competitions);

    return (
      <div className="app">
        <h1>Competitions</h1>
        
        <ul className="a">
          {competitions && competitions
          .map(competition => {
            return (
              <li className="p" key={competition.id}>
                <Link className="j" to={ROUTER_STANDINGS_LINK(`${competition.id}`)}>
                    <h2 className="r">{competition.name}</h2>
                </Link>
              </li>
            );
          })
          }
        </ul>
        
      </div>
    );
  }
}

export default CompetitionsContainer;
