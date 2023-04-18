import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ name, description, img }) => (
  <>
    <article className="rocket">
      <div className="image-container">
        <img src={img} alt="rocketimage" />
      </div>
      <div className="detail-container">
        <h2 className="headingh2">{name}</h2>
        <p>{description}</p>
        <button type="button" id="reserve-btn">
          Reserve Rocket
        </button>
      </div>
    </article>
  </>
);

RocketItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default RocketItem;
