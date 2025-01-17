import { Card, Col, Container, Row } from "react-bootstrap"
import project1 from './assets/project1.png'
// import React from 'react'

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1 style={{color:'#A294F9'}} className="text-center my-5">Projects</h1>
        <div>
          <Container>

                {/* project 1 */}
                <Row className="my-5">
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project1} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <p className="container-fluid"> Responsive React Website</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://atelier-responsive-react-webpage.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>

                {/* project 2 */}


            </Container>
        </div>
      </div>
    </>
  )
}

export default Projects