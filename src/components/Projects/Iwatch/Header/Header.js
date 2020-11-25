import styles from "./Header.module.css";

import homepage from "../../../../assets/projects/iwatch/homepage.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>iWatch</h2>
      <p className={styles.summary}>
        iWatch is a movie discovery platform to helps you find your next
        favorite movies. Find movies, read the synopsis, and give a review.
      </p>
      <a
        href="https://quirky-noyce-fa78f4.netlify.app/"
        className={styles.button}
      >
        Visit Page
      </a>
      <div className={styles.image}>
        <img src={homepage} alt="homepage" />
        <span>Homepage</span>
      </div>
    </div>
  );
};

export default Header;
