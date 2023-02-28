import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import { map } from "lodash";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container text-center">
        {console.log("this log", arrUsers)}
        <h1 className="mt-3">Manage users with Aluminum</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers && arrUsers.map((item,index) => {
                return (
                  <tr key={index} className="lh-lg">
                    <td className="column-data-user">{item.email}</td>
                    <td className="column-data-user">{`${item.lastName} ${item.firstName}`}</td>
                    <td className="column-data-user">{item.address}</td>
                    <td className="column-data-user">{item.phoneNumber}</td>
                    <td className="colum-data-user">
                      <button className="btn-edit me-2">
                        <i className="far fa-edit item-edit"></i>
                      </button>

                      <button className="btn-del">
                        <i className="far fa-trash-alt item-del"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
