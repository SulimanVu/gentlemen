import { Carousel } from "antd";

import firstImg from "@/shared/assets/images/AuthSlider1.png";
import secondImg from "@/shared/assets/images/AuthSlider2.png";
import thirdImg from "@/shared/assets/images/AuthSlider3.png";
import logo from "@/shared/assets/images/logo itself.svg";

import styles from "./authCarousel.module.scss";

export const AuthCarousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.logo}>
        {/* <img src={logo} alt="DOGMA" /> */}
        <h1>Promise</h1>
        <span>строительная компания</span>
      </div>
      <Carousel>
        <img src={firstImg} alt="" />
        <img src={secondImg} alt="" />
        <img src={thirdImg} alt="" />
      </Carousel>
    </div>
  );
};
