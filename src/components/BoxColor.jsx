const BoxColor = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb(${r} ${g} ${b})`,
    width: '300px',
    height: '300px',
  };
  return <div style={style}></div>;
};

export default BoxColor;
