import React from 'react';
import { Link } from 'react-router-dom';

import FooterComponent from '../FooterComponent';
import ResultTableComponent from '../ResultTableComponent';

import { getMatches } from '../../services/request';
import { ROUTER_PATH } from '../../constants/router/constantsRoutes';

class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: {},
      results: []
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    this.getMatchesFetch(id);
  };

  getMatchesFetch(id) {
    getMatches(id).then(data => {
      this.setState({
        results: data.matches,
        competition: data.competition
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
    const { competition, results } = this.state;
    console.log('RESULTS', results);

    const competitionStages = this.setCompetitionStages(results);
    const groupResults = key =>
      competitionStages[key].reduce((acc, item) => {
        acc[item.group] = acc[item.group] || [];
        acc[item.group].push(item);
        return acc;
      }, {});

    return (
      <div className="app">
        <div className="results-container">
          <h1 className="results-title">{`Results ${competition.name}`}</h1>
          <Link className="results-back-button" to={ROUTER_PATH}>
            VOLVER
          </Link>
          <div className="results-match">
            <table className="results-table">
              {Object.keys(competitionStages).map(key => {
                return (
                  <div className="results-stage" key={key}>
                    <h2 className="results-stage-name">{key === 'GROUP_STAGE' ? 'GROUP STAGE' : ''}</h2>
                    {Object.keys(groupResults(key)).map(item => {
                      return (
                        <div className="results-group" key={item}>
                          <h2 className="results-group-name">{item}</h2>
                          {groupResults(key)[item].map(item => {
                            return <ResultTableComponent item={item} key={key.id} />;
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
        <FooterComponent />
      </div>
    );
  }
}

export default ResultsComponent;
