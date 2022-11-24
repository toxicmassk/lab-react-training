const Rating = (props) => {
  const rate = Math.round(props.children);

  return <div>{rate}</div>;
};

export default Rating;
