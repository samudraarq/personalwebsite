import styles from "./Screenshots.module.css";
import SecondaryBg from "../../../UI/SecondaryBg";

import upicon from "../../../../assets/projects/feather_arrow-up.svg";

import discoverpage from "../../../../assets/projects/talikasih/discoverpage.png";
import campaigndetailspage from "../../../../assets/projects/talikasih/campaigndetailspage.png";
import myprofilepage from "../../../../assets/projects/talikasih/myprofilepage.png";
import adminpanelpage from "../../../../assets/projects/talikasih/adminpanelpage.png";

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
            <img src={discoverpage} alt="discoverpage" />
            <span>Discover</span>
          </div>
          <div className={styles.screenshot}>
            <img src={campaigndetailspage} alt="campaigndetailspage" />
            <span>Campaign Details</span>
          </div>
          <div className={styles.screenshot}>
            <img src={myprofilepage} alt="myprofilepage" />
            <span>My Profile</span>
          </div>
          <div className={styles.screenshot}>
            <img src={adminpanelpage} alt="adminpanelpage" />
            <span>Admin Panel</span>
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
