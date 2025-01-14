import { Card } from "react-bootstrap"

// import React from 'react'

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1 style={{color:'#A294F9'}} className="text-center my-5">Projects</h1>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Projects