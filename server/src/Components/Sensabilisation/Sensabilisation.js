import React  from "react";
import "./intro.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Vector1 from "../../Asset/Vector1.png";
import Vector2 from "../../Asset/Vector2.png";
import women from "../../Asset/women.png";
import cancerlogo from "../../Asset/cancer.png";
import FloatinDiv from "./FloatingDiv";
import { motion } from "framer-motion";
import icon1 from '../../Asset/icon1.png'
import icon2 from '../../Asset/icon2.png'
import icon3 from '../../Asset/icon3.png'
import icon4 from '../../Asset/icon4.png'
import icon5 from '../../Asset/icon5.png'
import icon7 from '../../Asset/icon7.png'


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const [text] = useTypewriter({
    words: ["Surveillez les changements sur votre peau", "Utilisez un écran solaire avec un facteur de protection solaire", "Évitez les cabines de bronzage.","Portez des vêtements de protection"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });


  return (
    <div className="Intro" style={{  display: "flex",height: "77vh",marginTop: "6rem"}}>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: "#D5CABC" }}>La prévention est la meilleure arme contre</span>
          <span style={{ color: "#C49D83" }}>le Cancer de la peau</span>
          <span> 
          <span style={{ color: "#BDA18A" }}>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
          </span>
        </div>
        <div className="i-icons">
          <img src={icon1} alt="" width={"90px"} />
          {/* <img src={icon2} alt="" width={"90px"} /> */}
          <img src={icon3} alt="" width={"90px"} />
          {/* <img src={icon4} alt="" width={"90px"} /> */}
          <img src={icon5} alt="" width={"90px"} />
          {/* <img src={icon6} alt="" width={"90px"} /> */}
          <img src={icon7} alt="" width={"90px"} />
        </div>
      </div>
      <div className="i-right" style={{  flex: 1, position: "relative"}}>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={women}  width='300px' alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-4%" }}
          transition={transition}
          width={'190px'}
          src={cancerlogo}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" ,top: "42%",}}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={icon2} text1="Soyez" text2="Prudent" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={icon4} text1="Soyez" text2="Prudent" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;


