import React, { useEffect } from "react";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import "../StyledComponents/NewFeatured.css";

import "../StyledComponents/NewFeatured.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
const NewFeatured = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="container">
        <motion.div
          className="content"
          animate={{ y: 100, scale: 1 }}
          initial={{ scale: 0 }}
        >
          <h1>Featured </h1>
          <h1> Works</h1>
        </motion.div>

        <div className="MainContainer">
          <div className="imageslider imageslider2" data-aos="fade-left">
            <h2 data-aos="fade-left" style={{ marginBottom: 20 }}>
            Disney+ Hotstar - Clone
            </h2>

            <h4 data-aos="zoom-in" className="number">
              01/02
            </h4>

            <a href="https://auth-4f627.web.app/">
              {" "}
              <BiLink className="link" data-aos="zoom-in" fontSize={40} />
            </a>
            <a href="https://github.com/Palvaiprudvi17/disney-cloneeee.git">
              <AiFillGithub
                className="github"
                data-aos="zoom-in"
                fontSize={40}
              />
            </a>

            <img src="https://dazeinfo.com/wp-content/uploads/2023/08/Disney-Hotstar-subscribers.jpeg" alt="" width={300} height={300} />
          </div>

          <div className="imageslider imageslider1" data-aos="fade-right">
            <h2 data-aos="fade-left" style={{ marginBottom: 20 }}>
              LinkedIn - Clone
            </h2>

            <h4 data-aos="zoom-in" className="number">
              02/02
            </h4>

            <a href="https://linked-clone1.web.app/">
              <BiLink className="link" data-aos="zoom-in" fontSize={40} />
            </a>
            <a href="https://github.com/Palvaiprudvi17/linkedin-clone.git">
              <AiFillGithub
                className="github"
                data-aos="zoom-out"
                fontSize={40}
              />
            </a>

            <img src="https://image.cnbcfm.com/api/v1/image/106099953-1566972463010gettyimages-1001511094.jpeg?v=1683636512" alt="" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeatured;
