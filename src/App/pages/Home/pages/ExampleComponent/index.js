import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "ExampleComponent";

class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className={cx(`${moduleName}`)}>text</div>;
  }
}

export default ExampleComponent;
