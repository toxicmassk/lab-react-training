import React from 'react';
import Rating from '../components/Rating';
const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { licensePlate, model } = car;
  // const ratingValue = Math.random(rating) * 5;
  return (
    <div>
      <div className="driverImg">
        <img className="bigImg" src={img} alt="" />
      </div>
      <span>{name}</span>
      <br />
      <span>
        <Rating>{rating}</Rating>
      </span>
      <span>
        {model}-{licensePlate}
      </span>
    </div>
  );
};

export default DriverCard;
