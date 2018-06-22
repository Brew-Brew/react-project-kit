import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "Header";

class Header extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Link to="/">Main </Link>
        <Link to="/example">example</Link>
      </div>
    );
  }
}

export default Header;
