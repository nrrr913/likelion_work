import "./App.css";
import Btn from "./components/common/Button.jsx";

function App() {
  return (
    <div className="App">
      <h1>카운트 증가 앱</h1>
      <p>버튼을 클릭할 때 숫자 증가</p>

      <Btn name="버튼" />
    </div>
  );
}

export default App;
