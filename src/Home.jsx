import './Home.css'
// import React from 'react'

const Home = () => {
  return (
    <>
    <div style={{border:' solid #F5EFFF'}} id='home' className='container-fluid text-center '>
        <p style={{color:'#8D77AB', marginTop:'120px'}} className="text-center fs-1 fw-bolder">HEY, I&apos;M GAURI SANTHOSH</p>
        <p>A passionate Web Developer and a 2024 Computer Science Graduate, 
        skilled in React and MERN stack development. <br /> I love crafting dynamic, responsive, and user-friendly web applications. </p>
        <button className="naviButton"><a style={{backgroundColor:'transparent', color:'white'}} href="#projects" className='text-decoration-none'>Projects</a></button>
        <div className="socials">
            <ul className='underorder'>
                <li style={{backgroundColor:'transparent'}}><a href="https://www.linkedin.com/in/gauri-santhosh-/" target='_blank'><i className="fa-brands fa-linkedin-in icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                <li style={{backgroundColor:'transparent'}}><a href="https://github.com/gaurisanthosh02" target='_blank'><i className="fa-brands fa-github icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                <li style={{backgroundColor:'transparent'}}><a href="https://dev.to/gaurisanthosh" target='_blank'><i className="fa-brands fa-dev icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Home