import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from '../FooterComponent';
import LoaderComponent from '../LoaderComponent';
import StandingsTableComponent from '../StandingsTableComponent';

import { getStandings } from '../../services/request';
import { ROUTER_PATH } from '../../constants/router/constantsRoutes';

class StandingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: {},
      isLoading: true,
      standings: []
    };
  }

  componentDidMount = async () => {
    const { match: 
      { params: 
        { id } } 
      } = this.props;
    this.getStandingsFetch(id);
  };

  getStandingsFetch(id) {
    getStandings(id).then(data => {
      this.setState({
        competition: data.competition,
        isLoading: false,
        standings: data.standings
      });
    });
  }

  hasTable(standing) {
    return (standing && standing.stage === 'REGULAR_SEASON') || 
    (standing && standing.stage === 'GROUP_STAGE');
  }

  render() {
    const { competition, isLoading, standings } = this.state;
    
    if (isLoading) {
      return <LoaderComponent />;
    }

    return (
      <div className="app">
        <div className="standings-container">
          <Link className="standings-back-button" to={ROUTER_PATH}>
            VOLVER
          </Link>
          <div className="standing-container-header">
            <h1 className="standings-title">{`Standings ${competition.name}`}</h1>
          </div>
          <div className="standings-tables">
            {standings && this.hasTable(standings[0]) ? 
              standings
                .filter(item => item.type === 'TOTAL')
                .map(team => <StandingsTableComponent team={team} />) : 
              (
                <h2 className="standings-unavailable">
                  Sorry, we don't have the standings   
                    <span role="img" aria-label="mono tapandose los ojos">   &#128584;</span>
                </h2>
              )   
             }
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default StandingsComponent;
