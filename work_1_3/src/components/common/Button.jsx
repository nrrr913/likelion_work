import { useState } from "react";

function Btn({ name }) {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{name}</button>
      <p>현재 카운트: {count}</p>
    </div>
  );
}

export default Btn;
