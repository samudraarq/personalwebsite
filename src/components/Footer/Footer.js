import styles from "./Footer.module.css";

import github from "../../assets/footer/feather_github.svg";
import linkedin from "../../assets/footer/feather_linkedin.svg";
import twitter from "../../assets/footer/feather_twitter.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a
          href="https://twitter.com/Samudra_Arq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://github.com/samudraarq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <p className={styles.copyright}>2020 Samudra Arqam</p>
    </div>
  );
};

export default Footer;
