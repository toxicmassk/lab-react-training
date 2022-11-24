// type randomProps = { min:number, max:number }; _typescript

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <p>
      Random value between {min} and {max} = {randomNumber}
    </p>
  );
};

export default Random;
