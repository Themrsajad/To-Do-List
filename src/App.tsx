import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Completed from "./components/pages/completed";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}
