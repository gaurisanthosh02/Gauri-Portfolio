import { Card, Col, Container, Row } from "react-bootstrap"
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'

// import React from 'react'

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1 style={{color:'#A294F9'}} className="text-center my-5">Projects</h1>
        <div>
          <Container>

                {/* project 2 */}
                <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project2} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                  <h2>Weather App</h2>
                    <p className="container-fluid">A user-friendly web application built with React that provides real-time weather information for any location. The app integrates the OpenWeather API to fetch and display data such as temperature, weather conditions, and more. Designed with responsive features, it ensures a seamless experience across devices.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://weather-app-react-f6f8dkm8w-gauri-ss-projects.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>


                {/* project 3 */}
                <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project3} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h2>Media Player</h2>
                    <p className="container-fluid">A feature-rich media player application built with React, offering seamless user interaction. The app includes CRUD operations for managing playlists, a drag-and-drop interface for easy file organization, and maintains watch history to track previously played media.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://media-player-eta-three.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>


                {/* project 1 */}
                <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project1} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h2>MI ATELIER</h2>
                    <p className="container-fluid">A modern and responsive fashion web application built with React, designed to showcase and explore trendy clothing collections. The app features an intuitive user interface, dynamic navigation, and responsive design to provide a seamless shopping experience across all devices.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://atelier-responsive-react-webpage.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>

                {/* project 4 */}
                <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project4} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h2>Counter App</h2>
                    <p className="container-fluid">A simple Counter application built using React, Redux, and React Hooks. This app demonstrates state management with Redux for efficient handling of counter logic and utilizes Hooks for efficient functional component implementation. Users can increment, decrement, and reset the counter, showcasing dynamic updates in real time.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://counter-app-using-redux-beta.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>
                

            </Container>
        </div>
      </div>
    </>
  )
}

export default Projects