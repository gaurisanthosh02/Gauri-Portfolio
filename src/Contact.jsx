import { useState } from "react";
import { Button, Form } from "react-bootstrap"

// import React from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99ceaf65-9c7d-4228-93d5-99658485b288");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(result)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };


  return (
    <>
        <div style={{padding:'100px 0px'}} id="contact" className="d-flex flex-column justify-content-center align-items-center ">
            <h1 style={{color:'#8D77AB'}} className="my-3">Contact</h1>
            <h5 className="my-3">Leave me a message!</h5>


            {/* form */}
            <div style={{backgroundColor:"#E5D9F2"}} className=" w-50 rounded p-3 my-3">
              <Form style={{backgroundColor:"#E5D9F2"}} onSubmit={onSubmit}>

                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Name</Form.Label>
                  <Form.Control style={{height:'50px'}} type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Email</Form.Label>
                  <Form.Control style={{height:'50px'}} type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group style={{backgroundColor:"#E5D9F2"}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{backgroundColor:"#E5D9F2"}}>Message</Form.Label>
                  <Form.Control style={{height:'120px'}} as="textarea" name="message" aria-label="With textarea" required/>                
                </Form.Group>

                <div style={{backgroundColor:"#E5D9F2"}} className="text-center d-flex flex-column">
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