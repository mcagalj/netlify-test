import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { NavLink } from "components";
import navLinks from "config/menu.js";
import { PrivateRoute } from "components";

const SideMenu = ({ status, className }) => {
  const nav = navLinks.map(link => {
    if (link.private) {
      return (
        <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {link.text}
            </NavLink>
          )}
        />
      );
    }

    return (
      <NavLink
        key={link.path}
        to={link.path}
        className={styles.NavLink}
        activeClassName={styles.NavLink_active}
      >
        {link.text}
      </NavLink>
    );
  });

  // const nav = navLinks.map(link => {
  //   const _NavLink = (
  //     <NavLink
  //       key={link.path}
  //       to={link.path}
  //       className={styles.NavLink}
  //       activeClassName={styles.NavLink_active}
  //     >
  //       {link.text}
  //     </NavLink>
  //   );

  //   if (link.private) {
  //     return <PrivateRoute key={link.path} render={() => _NavLink} />;
  //   }

  //   return _NavLink;
  // });

  return (
    <nav className={cn(styles.Menu, styles[status], className)}>{nav}</nav>
  );
};

export default SideMenu;
