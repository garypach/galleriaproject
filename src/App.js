import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import GalleryList from "./containers/GalleryList";

function App() {
  return (
    <div className="App">
      <GalleryList/>
      <Routes>
        <Route path={"/"} exact component={GalleryList} />
      </Routes>

    </div>
  );
}

export default App;