import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Completed from "./components/pages/Completed";

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
