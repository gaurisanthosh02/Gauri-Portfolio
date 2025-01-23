import { Col, Container, Row } from "react-bootstrap"
import './About.css'
// import React from 'react'

const About = () => {
  return (
    <>
       <div id="about" className="d-flex">
            <Container fluid>
                <h1 style={{color:'#8D77AB'}} className="text-center mt-2 mb-4">About</h1>
                <Row>
                    <Col md={6} sm={12}>
                    <div className="text-center px-3 mt-2">
                        <h2 style={{color:'#8D77AB'}} className="text-center">Get to know me!</h2>
                        <p className="text-start">Im a 2024 Computer Science and Engineering Graduate with a passion for <strong>web development</strong>. <br />
                        Currently I am pursuing a <strong>MEARN Stack</strong> course, where I’m gaining hands-on experience in building dynamic and user-friendly web applications.<br />
                        My goal is to craft meaningful applications that blends technology and creativity. <br />
                        I’m excited to bring my skills and enthusiasm to a team where I can continue to grow and contribute. <br />
                        Scroll down to explore some of the projects I’ve build, and feel free to connect with me for collaboration or job opportunities!
                        </p>
                        <button className="navButton"><a href="#contact" style={{textDecoration:'none', backgroundColor:'transparent', color:'white'}}>Contact</a></button>
                    </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <h2 style={{color:'#8D77AB'}} className="text-center mt-2">Skills</h2>
                        <div>
                            <button className="skillBox">HTML</button>
                            <button className="skillBox">CSS</button>
                            <button className="skillBox">JavaScript</button>
                            <button className="skillBox">React</button>
                            <button className="skillBox">Tailwind CSS</button>
                            <button className="skillBox">GIT</button>
                            <button className="skillBox">GitHub</button>
                            <button className="skillBox">Figma</button>
                            <button className="skillBox">Vercel</button>
                            <button className="skillBox">Bootstrap</button>
                            <button className="skillBox">Java</button>
                            <button className="skillBox">Responsive Designs</button>
                            <button className="skillBox">Rest APIs</button>
                            <button className="skillBox">Motion Dev</button>
    
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
    </>
  )
}

export default About