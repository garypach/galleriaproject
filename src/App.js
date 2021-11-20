import React from 'react';
import './App.css';
// import {Routes, Route} from "react-router-dom";
import GalleryList from "./containers/GalleryList";
import Header from './containers/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <GalleryList/>
    </div>
  );
}

export default App;