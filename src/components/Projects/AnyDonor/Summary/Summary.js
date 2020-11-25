import styles from "./Summary.module.css";
import Container from "../../../UI/Container";

const Summary = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Project Summary.</h2>
        <div className={styles.summary}>
          <p>Role: Web Developer (personal project)</p>
          <p>Duration: 1 week</p>
          <p>Main features:</p>
          <ul>
            <li>Login/Register User</li>
            <li>Donation Schedule</li>
            <li>Request Donor</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Summary;
