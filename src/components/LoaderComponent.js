import React from 'react';

class LoaderComponent extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    );
  }
}

export default LoaderComponent;