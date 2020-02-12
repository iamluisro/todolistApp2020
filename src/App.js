import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className='App'>
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
