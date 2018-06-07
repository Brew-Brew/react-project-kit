import React, { Component } from 'react';

import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'SearchInfo';


class SearchInfo extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        검색단지
      </div>
    );
  }
}

export default SearchInfo;
