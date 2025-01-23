import { Card, Col, Container, Row } from "react-bootstrap"
import project1 from './assets/project6.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import project5 from './assets/project5.png'

// import React from 'react'

const Projects = () => {
  return (
    <>
      <div id="projects" style={{padding:'100px 0px'}}>
        <h1 style={{color:'#8D77AB'}} className="text-center mt-5">Projects</h1>
        <h6 style={{color:'#9c653d'}} className="text-center mb-5">Some Relevant Projects</h6>
        <div>
          <Container>

                 {/* project 5 */}
                 <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project5} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h2>Task Manager</h2>
                    <p className="container-fluid">A simple Task Management application built using <strong>React</strong>, designed to organize and track their tasks. The app utilizes <strong>JSON Server</strong> as a mock backend to store and retrieve task data. <strong>Axios</strong> is employed for API calls. The app features task <strong>Creation, Editing, Deletion</strong>, and status <strong>Updates</strong> offering a user-friendly interface.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://task-manager-three-orpin.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
                    </div>
                  </Col>
                </Row>

                {/* project 2 */}
                <Row className="my-5" style={{color:'#9c653d'}}>
                  <Col md={6} sm={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={project2} />
                    </Card>
                  </Col>
                  <Col md={6} sm={12} className="container text-center d-flex flex-column justify-content-center align-items-center">
                  <h2>Weather App</h2>
                    <p className="container-fluid">A user-friendly web application built with <strong>React</strong> that provides real-time weather information for any location. The app integrates the <strong>OpenWeather API</strong> to fetch and display data such as temperature, weather conditions, and more.</p>
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
                    <p className="container-fluid">A feature-rich media player application built with <strong>React</strong>, styled using <strong>React Bootstrap</strong>, offering seamless user interaction. The app includes <strong>CRUD operations</strong> for managing playlists, a <strong>Drag-and-Drop</strong> interface for easy file organization, and maintains watch history to track previously played media.</p>
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
                    <h2>E Cart</h2>
                    <p className="container-fluid"> E-Cart website built with <strong>React</strong> and state mangement powered by <strong>Redux</strong>. The application uses API calls to fetch product data dynamically and is styled with <strong>Tailwind CSS</strong>. The users can search and view products, add items to their cart or wishlist, and navigate through the site.</p>
                    <div>
                    <button className="navButton"><a style={{backgroundColor:'transparent', color:'white'}} href="https://e-cart-redux-tailwind-two.vercel.app/" target="_blank" className='text-decoration-none'>Live Link</a></button>
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
                    <p className="container-fluid">A simple Counter application built using <strong>React</strong>, <strong>Redux</strong>, and <strong>React Hooks</strong>. This app demonstrates state management with Redux for handling of counter logic and utilizes Hooks for efficient functional component implementation. Users can increment, decrement, and reset the counter, showcasing dynamic updates in real time.</p>
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