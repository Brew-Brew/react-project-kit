import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "MainComponent";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className={cx(`${moduleName}`)}>main</div>;
  }
}

export default MainComponent;
