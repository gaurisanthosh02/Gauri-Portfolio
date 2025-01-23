import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import myImg from './assets/IMG_4186.jpg'
import { motion, useScroll } from "motion/react"

function App() {

  // animated scrolling
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* navbar */}
      <Navbar sticky="top" expand="lg" className="bg-light navStyle">
      <Container className='bg-light'>
        <Navbar.Brand className='bg-light' href="#home">
          <Image src={myImg} style={{objectFit:'cover', height:'50px', width:'50px'}} roundedCircle className='me-3'fluid/>
          GAURI SANTHOSH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='bg-light'>
          <Nav className="ms-auto bg-light">
            <Nav.Link href='#home' className='me-5 '>Home</Nav.Link>
            <Nav.Link href='#about' className='me-5'>About</Nav.Link>
            <Nav.Link href='#projects' className='me-5'>Projects</Nav.Link>
            <Nav.Link href='#contact' className='me-4'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <motion.div
      style={{
        scaleX: scrollYProgress, // Scale based on scroll progress
        transformOrigin: "0% 0%", // Makes the bar grow from left to right
        height: "8px", // Bar thickness
        backgroundColor: "#A294F9", // Bar color
        position: "fixed", // Fixed at the top
        top: 100,
        left: 0,
        right: 0,
        zIndex: 1
      }}
    />

      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </>
  )
}

export default App
