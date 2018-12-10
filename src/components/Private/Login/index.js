import React, { Component } from "react";
import { navigate } from "gatsby";
import styles from "./styles.module.css";

class LoginButton extends Component {
  state = { redirect: false };

  handleLogin = () => {
    this.props.handleLogin();
    navigate(this.props.private);
  };

  render() {
    return (
      <div className={styles.LoginForm__button} onClick={this.handleLogin}>
        {this.props.title}
      </div>
    );
  }
}

const LoginForm = props => (
  <form className={styles.LoginForm}>
    <input
      autoFocus
      type="text"
      className={styles.LoginForm__input}
      placeholder="Username"
    />

    <input
      type="password"
      className={styles.LoginForm__input}
      placeholder="Passphrase"
    />

    <LoginButton title={"Login"} {...props} />
  </form>
);

export default LoginForm;
