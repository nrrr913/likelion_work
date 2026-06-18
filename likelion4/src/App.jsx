import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<>경로가 잘못되었습니다.</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
