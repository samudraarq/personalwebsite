import Button from "../UI/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Hi, I'm sam.</h1>
        <h1>Frontend Software Developer.</h1>
      </div>
      <div className={styles.btn}>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
};

export default Header;
