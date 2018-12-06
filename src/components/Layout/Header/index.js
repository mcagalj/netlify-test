import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Link to="/" className={styles.Logo}>
          Gatsby
        </Link>
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};
