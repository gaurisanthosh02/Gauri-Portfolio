import { Col, Container, Row } from "react-bootstrap"
import './About.css'
// import React from 'react'

const About = () => {
  return (
    <>
       <div id="about" className="d-flex">
            <Container fluid>
                <h1 style={{color:'#8D77AB'}} className="text-center mt-2 mb-4">About Me</h1>
                <Row>
                    <Col md={6} sm={12}>
                    <div className="text-center px-3 mt-2">
                        <h2 style={{color:'#8D77AB'}} className="text-center">Lorem, ipsum.</h2>
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint at error recusandae consequatur quaerat laudantium cumque asperiores voluptate! Inventore, quo architecto. Dolore sapiente libero dolor, modi consectetur veritatis ipsam.
                        Tenetur eum, sequi recusandae esse asperiores atque autem qui repellat rem. Maxime, excepturi. Autem nihil quam aliquid saepe ducimus dolore pariatur quia aut tenetur provident odit, dicta, distinctio vero minima.
                        Adipisci obcaecati dolorem velit porro, dolor facilis mollitia reiciendis accusamus voluptas excepturi fugit esse nobis alias pariatur minus? Corrupti laboriosam corporis dolore architecto at rem magni mollitia fuga error qui.
                        Fuga consectetur similique animi facilis blanditiis sit voluptatem, totam quam, quis molestiae adipisci, esse nobis fugit accusamus eum soluta maiores tempore tenetur. Explicabo voluptate inventore assumenda earum dignissimos unde alias?</p>
                        <button className="navButton">Contact</button>
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
                            <button className="skillBox">HTML</button>
    
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
    </>
  )
}

export default About