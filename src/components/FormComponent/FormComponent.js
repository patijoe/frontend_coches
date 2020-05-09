import React from "react";
import searchIcon from "./images/search-icon.png";

class FormComponent extends React.Component {
  render() {
    return (
      <div class="form-search">
        <form id="search" action="#" method="post">
          <input
            autocomplete="off"
            className="form-input"
            id="search4"
            name="search4"
            placeholder="Ej: Seat Ibiza"
            spellcheck="false"
            type="text"
          />
          <button type="submit" className="form-button">
            <img
              alt="loupe for search"
              className="form-icon"
              src={searchIcon}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
