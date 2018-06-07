import React, { Component } from 'react';


import classnames from 'classnames/bind';

import css from './index.scss';


const moduleName = 'Review';
const cx = classnames.bind(css);

class Review extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        리뷰
      </div>
    );
  }
}

export default Review;
