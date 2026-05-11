import { useState } from "react";

function Btn({ name, show }) {
  let [따봉, 따봉변경] = useState(0);
  {
    /*
  if (show) {
    return <div>이거 보여주기</div>;
  }
    */
  }

  return (
    <>
      {show ? <div>t</div> : <div>f</div>}
      {/*
      <button onClick={() => 따봉변경(따봉 + 1)}>{name}</button>
      onClick은 함수 입력만 가능 or 함수 전체 코드 작성
      <span>{따봉}</span>
      */}
    </>
  );
}

export default Btn;
