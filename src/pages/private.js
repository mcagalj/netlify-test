import React from "react";
import { PrivateRoute } from "components";
import { Router } from "@reach/router";
import Login from "components/Private/Login";
import Dashboard from "components/Private/pages/Dashboard.js";
import Personal from "components/Private/pages/Personal.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "services/authentication/auth.js";
import { navigate } from "gatsby";
import styles from "styles/pages/private.module.css";

const Logout = () => (
  <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/private");
    }}
    className={styles.Logout}
  >
    Logout
  </a>
);

export default () => (
  <>
    {isLoggedIn() ? (
      <Logout />
    ) : (
      <>
        <h1>Private</h1>
        <Login private="/private/dashboard" handleLogin={handleLogin} />
      </>
    )}

    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/private"}
      />

      <PrivateRoute
        path="/private/personal"
        render={Personal}
        redirect={"/private"}
      />
    </Router>
  </>
);
