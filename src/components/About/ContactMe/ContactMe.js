import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Me.</h2>
      <p className={styles.questions}>
        Want to work together? Have a question?
      </p>
      <p className={styles.contact}>Email me at : samudrafaris@gmail.com</p>
      <p className={styles.contact}>
        Connect with me on : www.linkedin.com/in/samudra-faris-arqam/
      </p>
      <p className={styles.contact}>
        Check my repo on : https://github.com/samudraarq
      </p>
    </div>
  );
};

export default ContactMe;
