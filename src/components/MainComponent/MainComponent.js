import React from 'react';
import car from './images/pill-image.jpg';

class MainComponent extends React.Component {
  render() {
 

    return (
      <div>
        <div id="hero" class="cc_background_home_km0">
          <div class="titleWeb">
              <h1>Coches seminuevos y km 0</h1>
              <p>Las mejores ofertas en coches seminuevos y km 0 de concesionarios oficiales.</p>
          </div>
          <div class="buscador">
              <form id="buscar" action="#" method="post">
                  <input type="text" name="search4" id="search4" spellcheck="false" autocomplete="off"
                      placeholder="Ej: Seat Ibiza" />

                  <button type="submit" class="buscadorBoton">Buscar</button>

              </form>
          </div>
        </div>
        <div class="container"></div>
        <div class="row">
      <div class="cc_section_title">
        <h2 class="titulo">Ofertas destacadas de seminuevos y km 0</h2>
        <p>Seleccionamos las mejores ofertas de coches seminuevos según segmento y precio de mercado del vehículo</p>
      </div>
      <div class="cc_slider_enviroment">
        <div class="cc_pills_container">
          <div id="carCard" class="cc_carCard">
            <div class="cc_card_photo">
              <label class="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} class="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div class="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p>
              <p class="cc_precio">21.490 €</p>
              <p class="cc_line_height">Esta grand scénic 1.3 tce gpf zen 103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div class="cc_card_data_tech">
              <p>140 cv</p>
              <p>9.850 km</p>
              <p>2019</p>
              <p>Cadiz</p>
            </div>
          </div>
          <div id="carCard" class="cc_carCard">
            <div class="cc_card_photo">
              <label class="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} class="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div class="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p><p class="cc_precio">21.490 €</p>
              <p class="cc_line_height">Esta grand scénic 1.3 tce gpf zen 103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div class="cc_card_data_tech">
              <p>140 cv</p>
              <p>9.850 km</p>
              <p>2019</p>
              <p>Cadiz</p>
            </div>
          </div>
          <div id="carCard" class="cc_carCard">
            <div class="cc_card_photo">
              <label class="cc_label cc_km0">
                <span>km 0</span>
              </label>
              <img src={car} class="img-responsive" alt="Renault Scénic 1.3 TCe GPF Zen 103kW - 21.490 € - coches.com" />
            </div>
            <div class="cc_card_data">
              <p>Renault Scénic</p>
              <p>Scénic 1.3 TCe GPF 1.3 TCe GPF Zen 5p.</p>
              <p class="cc_precio">21.490 €</p>
              <p class="cc_line_height">Esta grand scénic 1.3 tce gpf zen  103kw 140cv se caracteriza muy bien por poder albergar tanto a pasajeros como toda nuestra...</p>
            </div>
            <div class="cc_card_data_tech">
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
