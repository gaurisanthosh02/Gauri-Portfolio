import './Home.css'
import { motion } from "motion/react"
// import React from 'react'

const Home = () => {
  return (
    <>
    <div style={{border:' solid #F5EFFF'}} id='home' className='container-fluid text-center '>
        <p style={{color:'#8D77AB', marginTop:'120px'}} className="text-center fs-1 fw-bolder">HEY, I&apos;M GAURI SANTHOSH</p>
        <p>A passionate Web Developer. <br /> I love crafting dynamic, responsive, and user-friendly web applications. </p>

        <motion.button
          whileHover={{ scale: 1.1 }} // Scales up on hover
          whileTap={{ scale: 0.95 }} // Shrinks slightly on tap
          onHoverStart={() => console.log("Hover started!")} // Logs when hover starts
          style={{
            padding: "10px 50px",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#A294F9",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <a style={{backgroundColor:'transparent', color:'white'}} href="#projects" className='text-decoration-none'>Projects</a>
        </motion.button>

        <div className="socials">
            <div className='verticalLine'></div>
              <ul className='underorder'>
                  <li style={{backgroundColor:'transparent'}}><a href="https://www.linkedin.com/in/gauri-santhosh-/" target='_blank'><i className="fa-brands fa-linkedin-in icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                  <li style={{backgroundColor:'transparent'}}><a href="https://github.com/gaurisanthosh02" target='_blank'><i className="fa-brands fa-github icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                  <li style={{backgroundColor:'transparent'}}><a href="https://dev.to/gaurisanthosh" target='_blank'><i className="fa-brands fa-dev icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
              </ul>
        </div>

    </div>
    </>
  )
}

export default Home