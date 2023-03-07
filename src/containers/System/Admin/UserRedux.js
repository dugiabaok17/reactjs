import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrGender: [],
    };
  }
  async componentDidMount() {
    this.props.getGenderStart();
    console.log("fire event");
    // try {
    //   let res = await getAllCodeService("gender");
    //   this.setState({
    //     arrGender: res.data,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentdidupdate heheh")
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        arrGender: this.props.genderRedux,
      });
    }
  }

  render() {
    let genders = this.state.arrGender;
    console.log("check props redux", this.props);
    return (
      <div className="user-redux-container">
        <div className="title">learn react-redux user redux hoi dan it</div>

        <div className="user-redux-body">
          <div className="container">
            <div className="form-row mb-3 mt-3">
              {" "}
              <h4>
                <FormattedMessage id="manage-user.add" />{" "}
              </h4>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.email" />{" "}
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.password" />{" "}
                </label>
                <input type="password" className="form-control" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.first-name" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.last-name" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.phone-number" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.address" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.gender" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((items, index) => {
                      return (
                        <option key={index}>
                          {" "}
                          {this.props.language === "en"
                            ? items.valueEn
                            : items.valueVi}{" "}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.position" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.role-id" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.image" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              <FormattedMessage id="manage-user.save" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
