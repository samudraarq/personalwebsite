import styles from "./Footer.module.css";

import github from "../../assets/footer/feather_github.svg";
import linkedin from "../../assets/footer/feather_linkedin.svg";
import twitter from "../../assets/footer/feather_twitter.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <img src={twitter} alt="twitter" />
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <p className={styles.copyright}>2020 Samudra Arqam</p>
    </div>
  );
};

export default Footer;
