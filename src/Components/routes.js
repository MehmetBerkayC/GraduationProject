import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import GamePage from "../Pages/GamePage";
import App from "../App";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="../App" element={<App />} />
      <Route path="../Pages/GamePage" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);
