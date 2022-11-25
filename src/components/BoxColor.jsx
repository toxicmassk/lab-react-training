const BoxColor = ({ r, g, b, children, bgColor }) => {
  const cssColor = bgColor ? bgColor : `rgb(${r} ${g} ${b})`;
  const style = {
    backgroundColor: cssColor,
    border: 'solid 3px black',
  };
  return <div style={style}>{children ? children : cssColor} </div>;
};

export default BoxColor;
