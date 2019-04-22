import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./welcome";
import Secured from "./secured";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li>
              <Link to="/">public component</Link>
            </li>
            <li>
              <Link to="/secured">secured component</Link>
            </li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
