import React, { Component } from 'react';

import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);

const moduleName = 'Reside';


class Reside extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        5년이내 아파트 거주 관련
      </div>
    );
  }
}

export default Reside;
