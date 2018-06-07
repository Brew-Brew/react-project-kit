import React, { Component } from 'react';

import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);

const moduleName = 'DetailInfo';

class DetailInfo extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        거주형태,시기,연령대
      </div>
    );
  }
}

export default DetailInfo;
