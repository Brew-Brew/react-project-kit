import React, { Component } from "react";

import classnames from "classnames/bind";
import { compose } from "recompose";
import { connect } from "react-redux";

import { loadData } from "src/redux/data/actions";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "UseReduxComponent";

class UseReduxComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { meta } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <p className={cx(`${moduleName}-content`)}>
          get data from redux: <strong>{meta.test}</strong>
        </p>
      </div>
    );
  }
}

export default compose(
  connect(
    ({ meta }) => ({
      meta
    }),
    { loadData }
  )
)(UseReduxComponent);
