import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import myImg from './assets/IMG_4186.jpg'
function App() {

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
            <Nav.Link href='#home' className='me-5'>Home</Nav.Link>
            <Nav.Link href='#about' className='me-5'>About</Nav.Link>
            <Nav.Link href='#projects' className='me-5'>Projects</Nav.Link>
            <Nav.Link href='#contact' className='me-4'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </>
  )
}

export default App
