import styles from "./Header.module.css";

import homepage from "../../../../assets/projects/talikasih/homepage.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Talikasih</h2>
      <p className={styles.summary}>
        Talikasih is a crowdsourcing donation platform to helps you achieve your
        campaign. Talikasih helps you spread your campaign and make other
        possible to support with a donation, sharing and commenting.
      </p>
      <a
        href="https://tender-williams-093432.netlify.app/"
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
