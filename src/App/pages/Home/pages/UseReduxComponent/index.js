import React, { Component, Fragment } from "react";

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

  componentDidMount() {
    const {loadData} = this.props;
    loadData();
  }
  

  render() {
    const { data } = this.props;
    const {datas: users, loading} = data;
    return (
      <div className={cx(`${moduleName}`)}>
        <p>example with call api request with saga , and get data from redux state</p>
        {loading? 
          <div>...loading</div>
         :
        <Fragment>
          {users.length > 0 && users.map((user)=>{
            return(<div>
              <img src={user.avatar} alt="" />
              <p>{`${user.first_name} ${user.last_name}`}</p>
            </div>)
          })}
        </Fragment>
        }
      </div>
    );
  }
}

export default compose(
  connect(
    ({ data }) => ({
      data
    }),
    { loadData }
  )
)(UseReduxComponent);
