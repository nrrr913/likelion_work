// Age.jsx
const Age = ({ age, setAge }) => {
  const handleDecrease = () => {
    setAge((prev) => Math.max(0, prev - 1));
  };

  const handleIncrease = () => {
    setAge((prev) => prev + 1);
  };

  return (
    <div>
      <span>나이</span>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <span>{age}</span>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default Age;
