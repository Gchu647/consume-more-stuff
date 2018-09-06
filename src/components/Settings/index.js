import React from 'react';
import { connect } from 'react-redux';
import { editPassword } from '../../actions';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassInput: '',
      newPassInput: ''
    };

    this.editThisPassword = this.editThisPassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    switch (event.target.id) {
      case 'oldPass':
        this.setState({ oldPassInput: event.target.value });
        break;
      case 'newPass':
        this.setState({ newPassInput: event.target.value });
        break;
      default:
        break;
    }
  }

  editThisPassword() {
    const data = {};
    data.oldPass = this.state.oldPassInput;
    data.newPass = this.state.newPassInput;
    this.props.editPassword(data);
    this.setState({
      oldPass: '',
      newPass: ''
    })
  }

  render() {
    return (
      <div className="settings-container">
        <div className="header">
          {this.props.user.username}
          's profile
        </div>
        <label htmlFor="oldPass">Current Password: </label>
        <input
          type="text"
          name="oldPass"
          id="oldPass"
          value={this.state.oldPassInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="newPass">New Password: </label>
        <input
          type="text"
          name="newPass"
          id="newPass"
          value={this.state.newPassInput}
          onChange={this.handleInputChange}
        />
        <button onClick = {this.editThisPassword}> edit password </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.usersList
  };
};

const mapDipatchToProps = dispatch => {
  return {
    editPassword: password => {
      dispatch(editPassword(password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Settings);
