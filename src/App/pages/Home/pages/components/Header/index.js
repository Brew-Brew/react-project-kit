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
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/example">example</Link>
          </li>
          <li>
            <Link to="/useRedux">useRedux</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
