import styles from "./Navbar.module.css";

import Container from "../UI/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className={styles.navContainer}>
        <NavLink
          exact
          to="/"
          style={{ textDecoration: "none" }}
          activeClassName={styles.active}
        >
          <span className={styles.navItem}>Projects.</span>
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          activeClassName={styles.active}
        >
          <span className={styles.navItem}>Sam.</span>
        </NavLink>
      </div>
    </Container>
  );
};

export default Navbar;
