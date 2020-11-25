import styles from "./Summary.module.css";
import Container from "../../../UI/Container";

const Summary = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Project Summary.</h2>
        <div className={styles.summary}>
          <p>Role: Frontend Tech Lead</p>
          <p>Duration: 4 weeks (2 sprints)</p>
          <p>Team size: 10 people (4 Frontend, 4 Backend, 2 React Native)</p>
          <p>Main features:</p>
          <ul>
            <li>Login/Register User</li>
            <li>Discover Campaign</li>
            <li>Create Campaign</li>
            <li>Giving Donation</li>
            <li>Admin Panel</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Summary;
