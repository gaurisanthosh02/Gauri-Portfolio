import { Button, Form } from "react-bootstrap"

// import React from 'react'

const Contact = () => {
  return (
    <>
        <div style={{padding:'100px 0px'}} id="contact" className="d-flex flex-column justify-content-center align-items-center ">
            <h1 style={{color:'#8D77AB'}} className="my-3">Contact</h1>
            <h5 className="my-3">Leave me a message!</h5>


            {/* form */}
            <div style={{backgroundColor:"#E5D9F2"}} className=" w-50 rounded p-3 my-3">
              <Form style={{backgroundColor:"#E5D9F2"}}>
                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Name</Form.Label>
                  <Form.Control style={{height:'50px'}} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Email</Form.Label>
                  <Form.Control style={{height:'50px'}} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Message</Form.Label>
                  <Form.Control style={{height:'120px'}} as="textarea" aria-label="With textarea" />                
                </Form.Group>

                <div style={{backgroundColor:"#E5D9F2"}} className="text-center">
                  <Button style={{backgroundColor:"#A294F9", border:"#A294F9", fontSize:'22px', color:'black'}} variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
        </div>
    
    </>
  )
}

export default Contact