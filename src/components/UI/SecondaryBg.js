import styles from "./SecondaryBg.module.css";

const SecondaryBg = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SecondaryBg;
