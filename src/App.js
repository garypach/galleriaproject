import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import GalleryList from "./containers/GalleryList";
import Gallery from './containers/Gallery'
function App() {
  return (
    <div className="App">
      <GalleryList/>
      <Switch>
      <Route path={"/gallery/:gallery"} exact component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;