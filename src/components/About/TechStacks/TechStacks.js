import Container from "../../UI/Container";
import SecondaryBg from "../../UI/SecondaryBg";
import styles from "./TechStacks.module.css";

import jsicon from "../../../assets/about/js-icon.png";
import reacticon from "../../../assets/about/react-icon.png";
import reduxicon from "../../../assets/about/redux-icon.png";
import nexticon from "../../../assets/about/nextjs-icon.png";
import firebaseicon from "../../../assets/about/firebase-icon.png";
import reactnativeicon from "../../../assets/about/reactnative-icon.png";
import nodeicon from "../../../assets/about/nodejs-icon.png";
import mongoicon from "../../../assets/about/mongodb-icon.png";
import tsicon from "../../../assets/about/ts-logo.png";
import styledcomponents from "../../../assets/about/styled-components-icon.png";

const TechStacks = () => {
  return (
    <SecondaryBg>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Tech Stacks.</h2>
          <div className={styles.stacks}>
            <p>Main Stacks.</p>
            <div className={styles.stackIcons}>
              <div className={styles.stackIcon}>
                <img src={jsicon} alt="javascript" />
                <p>JavaScript</p>
              </div>
              <div className={styles.stackIcon}>
                <img src={reacticon} alt="react" />
                <p>React</p>
              </div>
              <div className={styles.stackIcon}>
                <img src={reduxicon} alt="redux" />
                <p>Redux</p>
              </div>
            </div>
          </div>
          <div className={styles.stacks}>
            <p>Sub Stacks.</p>
            <div className={styles.substackIcons}>
              <div className={styles.substackIcon}>
                <img src={nexticon} alt="nextjs" />
                <p>NextJs</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={tsicon} alt="ts" />
                <p>TypeScript</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={styledcomponents} alt="styledcomponents" />
                <p>styled-components</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={firebaseicon} alt="firebase" />
                <p>Firebase</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={reactnativeicon} alt="reactnative" />
                <p>React Native</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={nodeicon} alt="nodejs" />
                <p>NodeJs</p>
              </div>
              <div className={styles.substackIcon}>
                <img src={mongoicon} alt="mongodb" />
                <p>mongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SecondaryBg>
  );
};

export default TechStacks;
