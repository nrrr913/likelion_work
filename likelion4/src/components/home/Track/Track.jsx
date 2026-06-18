const Track = ({ setTrack }) => {
  return (
    <div>
      <div onClick={() => setTrack("FE")}>FE</div>
      <div onClick={() => setTrack("BE")}>BE</div>
      <div onClick={() => setTrack("DE")}>DE</div>
    </div>
  );
};

export default Track;
