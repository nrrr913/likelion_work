import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import NotFoundPage from "../NotFoundPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
