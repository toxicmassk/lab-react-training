const IdCard = (props) => {
  console.log('props', props);
  const { picture, name, firstName, lastName, gender, height, birth } = props;
  const dateStr = String(birth).split(' ').splice(0, 4).join(' ');
  return (
    <div className="idCard">
      <div className="idImg">
        <img src={picture} alt={name} />
      </div>
      <p>
        <b>First name:</b> {firstName}
      </p>
      <p>
        <b>Last name:</b> {lastName}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Height:</b> {height}m
      </p>
      <p>
        <b>Birth:</b> {dateStr}
      </p>
    </div>
  );
};

export default IdCard;
