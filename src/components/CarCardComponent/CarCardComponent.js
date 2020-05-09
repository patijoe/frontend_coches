import React from "react";
import car from "../../styles/images/pill-image.jpg";
import heart from "../../styles/images/heart.png";
import calendar from "../../styles/images/calendar.png";

class CarCardComponent extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-container">
        <div className="card-image">
          <img src={car} className="card-image_responsive" alt={item.model} />
        </div>
        <div className="card-price">
          <img src={heart} className="card-price_icon" alt="like heart" />
          <p className="card-price_euros">{item.generalData.price}</p>
        </div>
        <p className="card-model">{item.generalData.model}</p>
        <div className="card-tech">
          <p className="card-tech_year">{item.techData.kms}</p>
          <div className="card-tech_date">
            <img src={calendar} className="card-tech_icon" alt="calendar" />
            <p className="card-tech_year">{item.techData.year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CarCardComponent;
