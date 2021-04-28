import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
