import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  handleLogin = () => {
    console.log(this.state);
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={this.state.username}
                onChange={(e) => this.handleOnChangeInput(e)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <input
                type={this.state.isShowPassword === false ? 'password' : 'text'}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleOnChangeInput(e)}
              />
              <span onClick={() => this.handleShowHidePassword()}>
                  <i className= {this.state.isShowPassword === true ? "fas fa-eye custom-location": "fas fa-eye-slash custom-location"} ></i>
              </span>
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>
            <div className="col-12 mt-1">
              <span className="forgot-password">Forget your password ?</span>
            </div>
            <div className="col-12 text-center mt-2">
              <span className="text-other-login">Or login with:</span>
            </div>
            <div className="col-12 social-login ">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
