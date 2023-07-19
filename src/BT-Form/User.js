import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class User extends Component {
  renderListUser = () => {
    let { listUser, keyword } = this.props;
   
    // listUser = listUser.filter(
    //   (user) => user.hoTen.toLowerCase().indexOf(keyword) !== -1
    // );
    // listUser = listUser.filter(
    //   (user) =>
    //     user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    // );
    return listUser?.map((user) => {
      return <UserItem key={user.maSV} user={user} />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderListUser()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUser: state.userReducer.listUser,
    getKeyword: state.userReducer.keyword,
  };
};
export default connect(mapStateToProps, null)(User);
