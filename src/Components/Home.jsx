import React,{useEffect} from "react";

import "../StyledComponents/Home.css";
import About from "./About";
import '../StyledComponents/Home.css'
import styled from "styled-components";
import { motion } from "framer-motion";
import NewFeatured from "./NewFeatured";
import ViewMore from "./ViewMore";
import MovingText from "./MovingText";
import AOS from "aos";
import "aos/dist/aos.css";
import {BiDownArrowAlt} from 'react-icons/bi'
const Home = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
       <div>
         <div className="body ">
          <Container>
            <Content>
              <Homepage>
              <p data-aos="fade-left" >palvai prudvi</p>
                <motion.div
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >

                  <h1>Frontend</h1>
                  <h1>Developer</h1>
                </motion.div>
              </Homepage>

              <Scrolling>
                <Scrollingitems>
                  <BiDownArrowAlt style={{fontSize:"30px",marginTop:"20px"}} />
                  <div data-aos="zoom-in" >
                    <p>keep</p>
                    <p>Scrolling</p>
                  </div>
                </Scrollingitems>
                <div>
                  <p  data-aos="zoom-out">Currently slicing through code</p>
                  <p  data-aos="zoom-out">
                    & pixels at <span className="name">PALVAI PRUDVI</span>
                  </p>
                </div>

              </Scrolling>
            </Content>

          </Container>

        </div>
        <MovingText/>
        <About />
        
    <NewFeatured/>

    <ViewMore/>

       </div>

    
  );
};

export default Home;

const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Content = styled.div`
  padding: 0 30px;
  min-height: 101vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 786px) {
    padding-inline: 1.5rem;
  }
`;
const Homepage = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    padding: 0;
    margin: 0;
    align-self: flex-start;
    color: #ff873c;
    overflow: hidden;
    font-weight: 400;
    text-transform: uppercase;
    font-size: max(16px, 30px);
    letter-spacing: 2px;
  }

  & h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    white-space: nowrap;
    font-size: clamp(4rem, 26vh, 16vw);
    font-weight: 800;
  }

  @media screen and (max-width: 786px) {
    p {
      font-size: 20px;
    }
  }
`;

const Scrolling = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  div p {
    padding: 0;
    margin: 0;
    line-height: 1.3;
    font-size: 20px;
  }
`;
const Scrollingitems = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;

  div p {
    padding: 0;
    margin: 0;
  }

   div p span{
    text-decoration: underline;
    cursor: pointer;
  }
`;
