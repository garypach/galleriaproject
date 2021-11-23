import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import GalleryList from "./containers/GalleryList";
import Gallery from './containers/Gallery'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path={"/"} exact component={GalleryList} />
      <Route path={"/:idx/:gallery"} component={Gallery} />
      <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;