import React from "react";
import { Container } from "components";
import GitHubIcon from "components/GitHubIcon";
import styles from "./styles.module.css";

const currentYear = new Date().getFullYear();

export default () => (
  <footer className={styles.Footer}>
    <Container className={styles.Container}>
      <div>
        <a href="https://github.com/mcagalj/netlify-test">
          <GitHubIcon />
        </a>
      </div>
      <p className={styles.Copyright}>
        {currentYear} Built with <a href="https://www.gatsbyjs.org">GatsbyJS</a>
        .
      </p>
    </Container>
  </footer>
);
