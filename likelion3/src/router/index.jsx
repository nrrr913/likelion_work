import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../NotFoundPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
