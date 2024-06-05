import React, { useState } from "react";
import "./About.css";
import { SectionTitle } from "../../components/components";
import image from "../../../../assets/images/aboutImage.jpg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      className="about-me container wrapper"
      id="about"
      data-aos="fade-right">
      <SectionTitle title="About Me" titleNo="__" />
      <div className=" p-2">
        <div className="row">
          <div className="col-lg-4 imageWrap">
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              perspective={800}
              transitionSpeed={1500}
              scale={1.1}
              gyroscope={true}>
              <img src={image} className="inner-element about-img" alt="pic" />
            </Tilt>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3
              className="subtitle"
              style={{ color: "#525252", fontWeight: "500" }}>
              Full-Stack Developer
            </h3>
            <p className="fst-italic">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-activity" />
                    <h6>JavaScript (ES6+)</h6>
                  </li>
                  <li>
                    <i className="bi bi-activity" />
                    <h6>React</h6>
                  </li>
                  <li>
                    <i className="bi bi-activity" />
                    <h6>Node.js</h6>
                  </li>
                  <li>
                    <i className="bi bi-arrow-bar-right" />
                    <strong>City:</strong> <span>Johannesburg, RSA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-arrow-bar-right" />
                    <h6>React-Native</h6>
                  </li>
                  <li>
                    <i className="bi bi-arrow-bar-right" /> <h6>Kotlin</h6>
                  </li>
                  <li>
                    <i className="bi bi-arrow-bar-right" /> <h6>TypeScript</h6>
                  </li>
                  <li>
                    <i className="bi bi-arrow-bar-right" />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              As a full-stack developer
              <span
                style={{
                  fontSize: "12px",
                  color: "#08fdd8",
                  fontFamily: '"Press Start 2P", system-ui',
                }}>{` < M E R N />`}</span>
              , I excel in creating exceptional web applications with intuitive
              interfaces that bridge the gap between users and technology.
              Guided by the principle that "simplicity is the greatest
              sophistication", I focus on crafting seamless user experiences. In
              addition to building new applications, I am dedicated to enhancing
              existing software to improve performance and optimize SEO.
              Although my primary expertise lies in web development, I also
              develop native mobile applications, expanding my ability to
              deliver comprehensive and effective solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="counts container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-code-slash" />
              <p>Web Development</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-phone" />
              <p>Mobile Development</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-graph-up-arrow" />
              <p>SEO Optimisation</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-ui-checks" />
              <p>UI | UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
