import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Completed from "./components/pages/Completed";
import { useEffect } from "react";
import { useZState } from "./states";

export default function App() {
  const { isEnglish } = useZState();

  useEffect(() => {
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  }, [isEnglish]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}
