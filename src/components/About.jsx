import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (


    
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}  
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

      </div>
      </motion.div>
    </Tilt>
  )  
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' 
    >
      I am a Undergradute Student at University of California Santa Cruz studing Computer Science (B.S).
      Languages I have experience in include Python, Java, HTML/CSS/JS/React, Assembly, C, C++. I have experience in 
      Solidworks, Fusion360 and 3D printing from participating in competitive robotics in High School and College. 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About, "about")