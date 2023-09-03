import React, { useEffect } from "react";
import "../StyledComponents/ViewMore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '../StyledComponents/ViewMore.css'
const ViewMore = () => {




  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="views">



      <h2 data-aos="zoom-in" className="viewheader">View More</h2>

      <h3 data-aos="zoom-out">Want to Start a Project ?</h3>
        <h2 data-aos="zoom-out">Let's Talk</h2>


<div className="viewssmallcontainer">
  

<h4>Design by : Palvai Prudvi</h4>
        <div className="contacts">
        <h4>Contact me by </h4>

<div className="socialmedia">
  <a href="https://twitter.com/prudvi1722124">
    <h4 className="socialmedialink">TW</h4>
  </a>
  
  <a href="https://www.linkedin.com/in/palvaiprudvi/"> <h4 className="socialmedialink">LN</h4></a>
  <a href="https://github.com/Palvaiprudvi17"><h4 className="socialmedialink">GN</h4></a>
</div>
        </div>
</div>

      

      
      </div>
    
  );
};

export default ViewMore;
