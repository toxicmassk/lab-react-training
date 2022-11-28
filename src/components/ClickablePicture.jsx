import React from 'react';
import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img);

  return (
    <div className="clickable">
      <img
        src="{img}"
        alt="{imgClicked}"
        onClick={() => setImage(image === img ? imgClicked : img)}
      />
    </div>
  );
};

export default ClickablePicture;
