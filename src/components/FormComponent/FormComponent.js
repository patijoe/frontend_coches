import React from "react";
import searchIcon from "./images/search-icon.png";

class FormComponent extends React.Component {
  render() {
    return (
      <div class="form-search">
        <form id="search" action="#" method="post">
          <input
            type="text"
            name="search4"
            id="search4"
            spellcheck="false"
            autocomplete="off"
            placeholder="Ej: Seat Ibiza"
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
