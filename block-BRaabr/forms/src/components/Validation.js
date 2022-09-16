import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confpassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confpassword: "",
      },
    };
  }

  isUserNameValid = (username) => {
    /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
    const res = /^[a-z0-9_\.]+$/.exec(username);
    const valid = !!res;
    return valid;
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    // let element = this.state[name];
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = this.isUserNameValid(value)
          ? ""
          : "Enter a valid username";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = value.length < 6 ? "Too small" : "";
        break;
      case "confpassword":
        errors.confpassword =
          value === this.state.password ? "" : "Password does not match";

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  render() {
    return (
      <form className="flex">
        <h1>Validation Form</h1>
        <label htmlFor="user">UserName</label>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Enter Name"
          className={this.state.errors.username ? "error" : ""}
        />
        {/* {this.state.errors.username ? (
          <span>{this.state.errors.username}</span>
        ) : (
          ""
        )} */}
        <span>{this.state.errors.username}</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
          placeholder="Enter Your Email"
          className={this.state.errors.email ? "error" : ""}
        />
        <span>{this.state.errors.email}</span>
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          name="password"
          placeholder="Enter Your Password"
          className={this.state.errors.password ? "error" : ""}
        />
        <span>{this.state.errors.password}</span>
        <label htmlFor="confpassword">Confirm your Password</label>
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.confpassword}
          name="confpassword"
          placeholder="Re-enter Password"
          className={this.state.errors.confpassword ? "error" : ""}
        />
        <span>{this.state.errors.confpassword}</span>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Validation;
