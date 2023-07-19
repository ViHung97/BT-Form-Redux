import React, { Component } from "react";
import { connect } from "react-redux";

class UserItem extends Component {
  render() {
    const { user, deleteUser, updateUser } = this.props;
    return (
      <tr>
        <td> {user.maSV} </td>
        <td> {user.hoTen} </td>
        <td> {user.phone} </td>
        <td> {user.email} </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {
              updateUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUser(user.maSV);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

// đưa yêu cầu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (maSV) => {
      const action = {
        type: "DELETE_USER",
        payload: maSV,
      };
      dispatch(action);
    },
    updateUser: (user) => {
      console.log(user);
      const action = {
        type: "EDIT_USER",
        payload: user,
      };
      console.log(action);
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(UserItem);
