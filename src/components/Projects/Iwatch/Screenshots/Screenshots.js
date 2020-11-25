import styles from "./Screenshots.module.css";
import SecondaryBg from "../../../UI/SecondaryBg";

import upicon from "../../../../assets/projects/feather_arrow-up.svg";

import moviedetails from "../../../../assets/projects/iwatch/moviedetails.png";
import reviews from "../../../../assets/projects/iwatch/reviews.png";

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
            <img src={moviedetails} alt="moviedetails" />
            <span>Movie Details</span>
          </div>
          <div className={styles.screenshot}>
            <img src={reviews} alt="reviews" />
            <span>Reviews</span>
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
