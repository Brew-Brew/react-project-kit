import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import classnames from "classnames/bind";

import css from "./index.scss";
import routes from "./routes";

const cx = classnames.bind(css);
const moduleName = "App";

class App extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ""} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
