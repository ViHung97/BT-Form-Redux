import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maSV: "",
      hoTen: "",
      phone: "",
      email: "",
    };
  }
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitUser(this.state);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        maSV: nextProps.userEdit.maSV,
        hoTen: nextProps.userEdit.hoTen,
        phone: nextProps.userEdit.phone,
        email: nextProps.userEdit.email,
      });
    } else {
      this.setState({
        maSV: "",
        hoTen: "",
        phone: "",
        email: "",
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className=" item col-md-6">
              <div className="form-group">
                <label />
                Mã SV:
                <input
                  type="text"
                  className="form-control"
                  name="maSV"
                  onChange={this.handleOnchange}
                />
              </div>
            </div>
            <div className=" item col-md-6">
              <label />
              Họ tên:
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={this.handleOnchange}
              />
            </div>
            <div className=" item col-md-6">
              <label />
              Số điện thoại:
              <input
                type="text"
                className="form-control"
                name="phone"
                onChange={this.handleOnchange}
              />
            </div>
            <div className=" item col-md-6">
              <label />
              Email:
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.handleOnchange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Thêm Sinh Viên
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      let action = {
        type: "SUBMIT_USER",
        payload: user,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
