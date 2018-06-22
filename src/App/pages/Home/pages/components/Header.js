import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./Header.scss";
const cx = classnames.bind(css);

const moduleName = "Header";

class Header extends Component {
  render() {
    return <div className={cx(`${moduleName}`)}>헤더</div>;
  }
}

export default Header;
