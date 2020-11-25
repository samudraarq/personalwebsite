import styles from "./Header.module.css";

import homepage from "../../../../assets/projects/anydonor/homepage.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>AnyDonor</h2>
      <p className={styles.summary}>
        AnyDonor is a simple apps for people who wants to donate their blood,
        make a schedule, and create a request for blood.
      </p>
      <a
        href="https://anydonor.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
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
