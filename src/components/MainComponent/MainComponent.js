import React from "react";
import HeroComponent from "../HeroComponent/index";
import CarCardComponent from "../CarCardComponent/index";
import carsInfo from "../../constants/carsCard";

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-container">
        <HeroComponent />
        <div className="main-section">
          <h2 className="main-section_title">
            <strong>15.531 ofertas</strong> de coches
            <strong> seminuevos</strong> y de <strong>Km0</strong>
          </h2>
          <ul className="main-slider_list">
            {carsInfo.map((item, index) => {
              return (
                <li className="card-slider_item" key={index}>
                  <CarCardComponent item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainComponent;
