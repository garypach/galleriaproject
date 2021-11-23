import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import GalleryList from "./containers/GalleryList";
import Gallery from './containers/Gallery'
import Header from './containers/header/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path={"/"} exact component={GalleryList} />
      <Route path={"/:gallery"} component={Gallery} />
      <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;