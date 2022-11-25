import React from 'react';

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
      <span>{rating}</span>
      <br />
      <span>
        {licensePlate}
        {model}
      </span>
    </div>
  );
};

export default DriverCard;
