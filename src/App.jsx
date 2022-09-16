import React from "react";
import "./reset.scss";
import "./App.scss";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Article from "./components/Article";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Article />
      <SideNav />
    </div>
  );
};

export default App;
