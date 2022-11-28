import React from 'react';
import { useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [like, setLike] = useState(0);
  const [colorChange, setColorChange] = useState('purple');

  return (
    <div>
      <button
        style={{ background: colorChange }}
        onClick={() => {
          setLike(like + 1);
          setColorChange(colors[Math.floor(Math.random() * colors.length)]);
        }}
      >
        {like === 1 ? `${like} Like` : `${like} Likes`}
      </button>
    </div>
  );
};

export default LikeButton;
