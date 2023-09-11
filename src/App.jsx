import Home from "./components/home";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
