// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/" element={<h1>404 : PAGE NOT FOUND</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
