import React, { Component } from "react";
import User from "./User";
import Search from "./Search";
import Modal from "./Modal";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Thông Tin Sinh Viên</h1>
        <div className="container">
          <Modal />
          <Search />
          <User />
        </div>
      </div>
    );
  }
}
