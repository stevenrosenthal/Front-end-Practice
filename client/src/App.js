import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
