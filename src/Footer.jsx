// import React from 'react'

import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
        <footer className="container-fluid bg-dark text-light d-flex">
            <Container style={{color:'#8D77AB'}} className="bg-dark my-5">
                <Row >
                    <Col  className="bg-dark">
                        <div  className="d-flex justify-content-between bg-dark">
                            <div className="bg-dark ">
                                <h3 className="bg-dark  ">Gauri Santhosh</h3>
                                <p className="bg-dark">Passionate Developer. <br /> Loves learning new Technologies.</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="bg-dark d-flex justify-content-center">
                        <div className="bg-dark">
                            <h3 className="bg-dark text-center">SOCIAL</h3>
                            <div className="d-flex bg-dark mt-3">
                                {/* name, email, msg */}
                                <a href="https://www.linkedin.com/in/gauri-santhosh-/" target="_blank" className="bg-dark"><i className="fa-brands fa-linkedin-in icons mx-3" style={{backgroundColor:'transparent'}}></i></a>
                                <a href="https://github.com/gaurisanthosh02" target="_blank" className="bg-dark"><i className="fa-brands fa-github icons mx-3" style={{backgroundColor:'transparent'}}></i></a>
                                <a href="https://dev.to/gaurisanthosh" target="_blank" className="bg-dark"><i className="fa-brands fa-dev icons mx-3" style={{backgroundColor:'transparent'}}></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr style={{ height:'3px', borderRadius:'5px'}}/>
                <Row className="mb-3">
                    <div className="text-center bg-dark ">
                    &copy; Copyright 2025. Made by  <span><a href="https://gauri-portfolio-delta.vercel.app/" className="bg-dark text-light" style={{textDecoration:'none'}}>Gauri Santhosh</a></span>
                    </div>
                </Row>
            </Container>


        </footer>
    </>
  )
}

export default Footer