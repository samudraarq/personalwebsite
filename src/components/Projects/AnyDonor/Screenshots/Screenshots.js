import styles from "./Screenshots.module.css";
import SecondaryBg from "../../../UI/SecondaryBg";

import upicon from "../../../../assets/projects/feather_arrow-up.svg";

import donorform from "../../../../assets/projects/anydonor/donorform.png";
import donorhistory from "../../../../assets/projects/anydonor/donorhistory.png";
import registerpage from "../../../../assets/projects/anydonor/registerpage.png";
import requestpage from "../../../../assets/projects/anydonor/requestpage.png";

const Screenshots = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <SecondaryBg>
      <div className={styles.container}>
        <h2 className={styles.title}>Screenshots.</h2>

        <div className={styles.screenshots}>
          <div className={styles.screenshot}>
            <img src={registerpage} alt="registerpage" />
            <span>Register User</span>
          </div>
          <div className={styles.screenshot}>
            <img src={requestpage} alt="requestpage" />
            <span>Donation Requests</span>
          </div>
          <div className={styles.screenshot}>
            <img src={donorform} alt="donorform" />
            <span>Donor Form</span>
          </div>
          <div className={styles.screenshot}>
            <img src={donorhistory} alt="donorhistory" />
            <span>Donor History</span>
          </div>
        </div>
        <button className={styles.upBtn} onClick={scrollTop}>
          <img src={upicon} alt="up" />
        </button>
      </div>
    </SecondaryBg>
  );
};

export default Screenshots;
