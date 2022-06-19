import { Routes, Route } from "react-router-dom";
import Header from "./components/partials/header/Header";
import Home from "./components/pages/home/Home";
import Add from "./components/pages/add.js/Add";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
