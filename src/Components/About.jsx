import React from "react";
import { styled } from "styled-components";
import useMousePosition from "./UseMotion";
import { useState } from "react";


import { motion } from "framer-motion";
import "../StyledComponents/About.css";
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (


  <div >
    <h2 style={{textAlign:"center",marginBottom:"50px",fontSize:"5rem"}}>About Me</h2>
     <div className="container">
       
       <main className="main">
       <motion.div
         className="mask"
         animate={{
           WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
           WebkitMaskSize: `${size}px`,
         }}
         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
       >
         <p
           onMouseEnter={() => {
             setIsHovered(true);
           }}
           onMouseLeave={() => {
             setIsHovered(false);
           }}
         >
          Proficient in HTML, CSS, and JavaScript, Reactjs ,ReduxToolkit,Git and GitHub Material UI
with a intermediate foundation of creativity and
technical skills  
         </p>
       </motion.div>

       <div className="smallcontainer">
         <p>
         Hello! I'm Palvai prudvi, a passionate and highly skilled Frontend Developer with a creative flair and a dedication to crafting immersive and user-friendly web experiences. With a strong foundation in web technologies,
           
         </p>
       </div>
     </main>

  
 </div>
  </div>
    
  );
};

export default About;


//   h2 {
//     font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//       Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
//       sans-serif;
//     font-size: 30px;
//     letter-spacing: 1.2px;
//     font-weight: bolder;
//     margin-left: 30px;
//     margin-top: 20px;
//   }
// `;
// const Content = styled.div`
//   margin-top: 10px;
//   letter-spacing: 1.2px;
//   line-height: 1.5;
//   text-align: center;
//   box-sizing: border-box;
//   padding: 0 30px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   /* width: 475px; */
//   width: 100%;

//   box-sizing: border-box;

//   & p {
//     font-size: 30px;
//   }

//   @media screen and (max-width: 786px) {
//     line-height: 1.2;

//     & p {
//       font-size: 20px;
//       width: none;
//     }
//   }
// `;
