import { useState } from "react";
import "./App.css";
import Btn from "./components/common/Button";

function Post({ a, b }) {
  return (
    <div className="black-nav">
      <h4>{a}</h4>
      <p>갖다쓸 때</p>
      <p>{b}</p>
      <Btn></Btn>
    </div>
  );
}

function App() {
  let post = "삼육 후문 맛집";
  let [menu] = useState("커피 메뉴 추천");

  let [a, b] = useState(["클1", "클2", "클3"]);

  {
    /*a는 커피 메뉴 추천 b는 변경을 도움*/
  }
  {
    /*
  destructuring
  let num = [1, 2];
  let a = num[0]; //0번째 자료를 가져옴
  let c = num[1];

  let [a,c] = [1,2];
  */
  }

  return (
    <div className="App">
      <Post a={post} b={menu}></Post>
      <div className="container">
        {a.map((item) => (
          <button className="btns">{item}</button>
        ))}

        <Btn name="버튼입니다" show={true} />
        <Btn name="버튼입니다" show={false} />

        {/*
        <button className="btns">클릭</button>
        <button className="btns">클릭</button>
        <button className="btns">클릭</button>
        */}
      </div>
    </div>
  );
}

export default App;
