const Name = ({ name, setName }) => {
  return (
    <div>
      <label htmlFor="name-input">이름</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default Name;
