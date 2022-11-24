import BoxColor from './BoxColor';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const hide = '**** **** ****' + number.substr(-4);
  return (
    <BoxColor bgColor={bgColor}>
      <p> {type} </p>
      {hide}
      <p>
        Expires {expirationMonth} / {expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </BoxColor>
  );
};

export default CreditCard;
