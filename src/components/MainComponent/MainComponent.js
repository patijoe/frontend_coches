import React from 'react';
import HeroComponent from '../HeroComponent/index';
import car from './images/pill-image.jpg';

class MainComponent extends React.Component {
  render() {
 

    return (
      <div>
        <HeroComponent />
        <div className="container"></div>
        <div className="row">
      <div className="cc_section_title">
        <h2 className="titulo">Ofertas destacadas de seminuevos y km 0</h2>
        <p>Seleccionamos las mejores ofertas de coches seminuevos según segmento y precio de mercado del vehículo</p>
      </div>
      <div className="cc_slider_enviroment">
        <div className="cc_pills_container">
          <div id="carCard" className="cc_carCard">
            <div className="cc_card_photo">
              <label className="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} className="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div className="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p>
              <p className="cc_precio">21.490 €</p>
              <p className="cc_line_height">Esta grand scénic 1.3 tce gpf zen 103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div className="cc_card_data_tech">
              <p>140 cv</p>
              <p>9.850 km</p>
              <p>2019</p>
              <p>Cadiz</p>
            </div>
          </div>
          <div id="carCard" className="cc_carCard">
            <div className="cc_card_photo">
              <label className="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} className="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div className="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p><p className="cc_precio">21.490 €</p>
              <p className="cc_line_height">Esta grand scénic 1.3 tce gpf zen 103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div className="cc_card_data_tech">
              <p>140 cv</p>
              <p>9.850 km</p>
              <p>2019</p>
              <p>Cadiz</p>
            </div>
          </div>
          <div id="carCard" className="cc_carCard">
            <div className="cc_card_photo">
              <label className="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} className="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div className="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p>
              <p className="cc_precio">21.490 €</p>
              <p className="cc_line_height">Esta grand scénic 1.3 tce gpf zen  103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div className="cc_card_data_tech">
              <p>140 cv</p>
              <p>9.850 km</p>
              <p>2019</p>
              <p>Cadiz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default MainComponent;
