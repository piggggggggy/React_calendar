import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";


import Main from "../pages/Main";
import Add from "../pages/Add";
import Test from "../pages/Test";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/hi" exact component={Test} />
        <Route path="/add" exact component={Add} />
      </ConnectedRouter>
    </React.Fragment>
  );
};

export default App;
