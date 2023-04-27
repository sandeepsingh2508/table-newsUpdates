import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsLetter from "./screen/NewsLetter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other-page" element={<NewsLetter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
