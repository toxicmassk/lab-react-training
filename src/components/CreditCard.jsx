import BoxColor from './BoxColor';
import visaImage from './../assets/images/visa.png';
import mastercardImage from './../assets/images/matsercard.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
  } = props;
  const hide = '**** **** ****' + number.substr(-4);
  const normalizeNumber = (value) => {
    return String(value).padStart(2, '0').slice(-2);
  };

  return (
    <BoxColor bgColor={bgColor}>
      <p> {type} </p>
      <img
        src="{type === 'Visa'?  visaImage : mastercardImage }"
        alt="{type}"
      />
      {hide}
      <p>
        Expires {normalizeNumber(expirationMonth)} /
        {normalizeNumber(expirationYear)} {bank}
      </p>
      <p>{owner}</p>
    </BoxColor>
  );
};

export default CreditCard;
