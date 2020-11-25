import styles from "./AboutMe.module.css";
import Container from "../../UI/Container";

import photoprofile from "../../../assets/about/photoprofile.png";

const AboutMe = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me.</h2>
        <img src={photoprofile} alt="profile" className={styles.photo} />
        <div className={styles.bio}>
          <p>Hi! My name is Samudra Arqam and I live in Jakarta, Indonesia.</p>
          <p>My main focus is website development using ReactJs.</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
