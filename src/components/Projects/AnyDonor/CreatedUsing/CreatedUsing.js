import styles from "./CreatedUsing.module.css";
import SecondaryBg from "../../../UI/SecondaryBg";

import nextjsicon from "../../../../assets/about/nextjs-icon.png";
import tsicon from "../../../../assets/about/ts-logo.png";
import firebaseicon from "../../../../assets/about/firebase-icon.png";
import styledcomponentsicon from "../../../../assets/about/styled-components-icon.png";

const CreatedUsing = () => {
  return (
    <SecondaryBg>
      <div className={styles.container}>
        <h2 className={styles.title}>Created Using.</h2>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={nextjsicon} alt="nextjs" />
            <p>NextJs</p>
          </div>
          <div className={styles.icon}>
            <img src={tsicon} alt="ts" />
            <p>TypeScript</p>
          </div>
          <div className={styles.icon}>
            <img src={styledcomponentsicon} alt="styledcomponents" />
            <p>styled-components</p>
          </div>
          <div className={styles.icon}>
            <img src={firebaseicon} alt="firebase" />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </SecondaryBg>
  );
};

export default CreatedUsing;
