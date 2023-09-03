import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";


import '../StyledComponents/MovingText.css'
const MovingText = () => {
    const { scrollYProgress } = useScroll();
    const xl = useTransform(scrollYProgress, [0, 1], [0, -600]);





  return (
    <div>

        
        <motion.h1 className="movingtext" style={{x:xl}}>
        Turning ideas into interactive experiences, one line at a time </motion.h1>
    </div>
  )
}

export default MovingText