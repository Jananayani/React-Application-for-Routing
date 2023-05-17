import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Brand from "./components/Pages/Brand";

const App = () => {
  const navItems = [
    { label: 'Home', url: '/home' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <div></div>

      <Router>
        <SearchBar handleSearch={handleSearch} />
        <Header navItems={navItems} />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:name" element={<Brand />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
