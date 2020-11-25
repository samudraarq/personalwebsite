import styles from "./Projects.module.css";
import Container from "../../UI/Container";
import Button from "../../UI/Button";

import talikasih from "../../../assets/home/talikasih-banner.png";
import iwatch from "../../../assets/home/iWatch-banner.png";
import anydonor from "../../../assets/home/anydonnor-banner.png";

const Projects = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects.</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.banner}>
              <img src={talikasih} alt="talikasih banner" />
              <div className={styles.overlay}>
                <Button link="talikasih">Learn More</Button>
              </div>
            </div>
            <h3>Talikasih</h3>
          </div>
          <div className={styles.project}>
            <div className={styles.banner}>
              <img src={iwatch} alt="iwatch banner" />
              <div className={styles.overlay}>
                <Button link="iwatch">Learn More</Button>
              </div>
            </div>
            <h3>iWatch</h3>
          </div>
          <div className={styles.project}>
            <div className={styles.banner}>
              <img src={anydonor} alt="anydonor banner" />
              <div className={styles.overlay}>
                <Button link="anydonor">Learn More</Button>
              </div>
            </div>
            <h3>AnyDonor</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
