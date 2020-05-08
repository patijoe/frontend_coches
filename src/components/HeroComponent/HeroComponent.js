import React from 'react';
import FormComponent from "../FormComponent/index";

class HeroComponent extends React.Component {
  render() {
 

    return (
        <div id="hero" className="hero-container">
          <div className="hero-title">
              <h1>La mayor oferta de coches Seminuevos y km 0 </h1>
          </div>
          <FormComponent />
        </div>
    );
  }
}

export default HeroComponent;
