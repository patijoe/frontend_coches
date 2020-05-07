import React from 'react';

class HeroComponent extends React.Component {
  render() {
 

    return (
        <div id="hero" className="hero-container">
          <div className="hero-title">
              <h1>Coches seminuevos y km 0</h1>
              <p>Las mejores ofertas en coches seminuevos y km 0 de concesionarios oficiales.</p>
          </div>
          <div class="hero-search">
              <form id="search" action="#" method="post">
                  <input type="text" name="search4" id="search4" spellcheck="false" autocomplete="off"
                      placeholder="Ej: Seat Ibiza" />
                  <button type="submit" className="hero-button">Buscar</button>
              </form>
          </div>
        </div>
    );
  }
}

export default HeroComponent;
