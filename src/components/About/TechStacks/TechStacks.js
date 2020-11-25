import Container from "../../UI/Container";
import SecondaryBg from "../../UI/SecondaryBg";
import styles from "./TechStacks.module.css";

import jsicon from "../../../assets/about/js-icon.png";
import reacticon from "../../../assets/about/react-icon.png";
import reduxicon from "../../../assets/about/redux-icon.png";

const TechStacks = () => {
  return (
    <SecondaryBg>
      <Container>
        <h2 className={styles.title}>Tech Stacks.</h2>
        <div className={styles.mainstacks}>
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
      </Container>
    </SecondaryBg>
  );
};

export default TechStacks;
