import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Main from "../pages/Main";


function App() {
  return (
    <React.Fragment>
        <Main/>
    </React.Fragment>
  );
}

export default App;
