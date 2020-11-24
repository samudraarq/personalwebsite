import styles from "./Navbar.module.css";

import Container from "../UI/Container";

const Navbar = () => {
  return (
    <Container>
      <div className={styles.navContainer}>
        <span className={styles.navItem}>Projects.</span>
        <span className={styles.navItem}>Sam.</span>
      </div>
    </Container>
  );
};

export default Navbar;
