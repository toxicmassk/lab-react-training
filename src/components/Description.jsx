import React from 'react';
import BoxColor from './BoxColor';

const Description = (props) => {
  const { children } = props;
  return (
    <BoxColor bgColor="#ddbb55">
      <h1>Breaking News</h1>
      <p>{children}</p>
    </BoxColor>
  );
};

export default Description;

// This is an example I did with my tutor, can be ignored. Not part of the lab :)
