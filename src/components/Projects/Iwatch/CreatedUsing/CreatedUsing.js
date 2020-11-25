import styles from "./CreatedUsing.module.css";
import SecondaryBg from "../../../UI/SecondaryBg";

import reacticon from "../../../../assets/about/react-icon.png";

const CreatedUsing = () => {
  return (
    <SecondaryBg>
      <div className={styles.container}>
        <h2 className={styles.title}>Created Using.</h2>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={reacticon} alt="react" />
            <p>ReactJs</p>
          </div>
        </div>
      </div>
    </SecondaryBg>
  );
};

export default CreatedUsing;
