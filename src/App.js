import React, { Component } from "react";
import "./style/App.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
