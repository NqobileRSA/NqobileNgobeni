import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Left, Right } from "../../components/components";
import SkillSphere from "../../components/SkillSphere/SkillSphere";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home " className="banner container ">
      <Left />
      <Right />
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="heading-3">
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="heading-1">
        Nqobile Ngobeni.
        <span className="subheading">
          <Typewriter
            options={{
              strings: [
                "Web-Developer 💻",
                "Full-Stack Developer 👨🏾‍💻",
                "Gamer 🎮",
                "UI | UX Designer 📱",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="paragraph">
        Versatile JavaScript developer specializing in web, mobile, and desktop
        applications. Passionate about AI and ethical hacking. Balances coding
        with weightlifting at the gym and immersive video gaming, fueling
        creativity and dedication.
      </motion.p>
      <div className="actions">
        <a href="#projects">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="button btn-1 heading-3">
            Explore My Work
          </motion.button>
        </a>
        {/* <a href="#contact">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="button btn-2">
            Contact me
          </motion.button>
        </a> */}
      </div>
      <SkillSphere style={{ borderLeft: "1px solid white" }} />
    </section>
  );
};

export default Home;
