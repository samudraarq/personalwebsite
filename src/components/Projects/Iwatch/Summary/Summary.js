import styles from "./Summary.module.css";
import Container from "../../../UI/Container";

const Summary = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Project Summary.</h2>
        <div className={styles.summary}>
          <p>Role: Frontend Developer</p>
          <p>Duration: 2 weeks (1 sprint)</p>
          <p>Team size: 5 people (2 Frontend, 2 Backend, 1 React Native)</p>
          <p>Main features:</p>
          <ul>
            <li>Login/Register User</li>
            <li>Discover Movies</li>
            <li>Give Reviews</li>
            <li>Add New Movies</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Summary;
