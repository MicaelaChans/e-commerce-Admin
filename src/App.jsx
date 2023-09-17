import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

