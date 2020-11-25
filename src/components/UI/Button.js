import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ children, link }) => {
  return (
    <Link to={`/${link}`}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
};

export default Button;
