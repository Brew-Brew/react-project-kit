import React, { Component } from "react";
import classnames from "classnames/bind";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import routes from "./routes";
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "Home";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Header />
        <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ""} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Home;
