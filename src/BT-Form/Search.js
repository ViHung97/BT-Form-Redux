import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <div>
        <label>Tìm kiếm:</label>
        <input
          type="text"
          className="form-control mb-3 w-50"
          onChange={this.handleOnchange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      const action = {
        type: "GET_KEYWORD",
        payload: keyword,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Search);
