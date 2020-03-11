import React from 'react';
import { Link } from 'react-router-dom';

import FooterComponent from '../FooterComponent';
import LoaderComponent from '../LoaderComponent';
import ResultTableComponent from '../ResultTableComponent';

import { getMatches } from '../../services/request';
import { ROUTER_PATH } from '../../constants/router/constantsRoutes';

class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: {},
      isLoading: true,
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
        competition: data.competition,
        isLoading: false,
        results: data.matches
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
    const { competition, isLoading, results } = this.state;

    if (isLoading) {
      return <LoaderComponent />;
    }

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
          <Link 
            className="results-back-button" 
            to={ROUTER_PATH}>
            VOLVER
          </Link>
          <div className="results-match">
            <table className="results-table">
              {Object.keys(competitionStages)
                .map((key, index) => {
                return (
                  <div className="results-stage" key={index}>
                    <h2 className="results-stage-name">
                      {key === 'GROUP_STAGE' ? 'GROUP STAGE' : ''}
                     </h2>
                    {Object.keys(groupResults(key))
                      .map((item, index) => {
                      return (
                        <div className="results-group" key={index+1000}>
                          <h2 className="results-group-name">{item}</h2>
                          {groupResults(key)[item].map(item => {
                            return <ResultTableComponent item={item} key={item.id} />;
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
