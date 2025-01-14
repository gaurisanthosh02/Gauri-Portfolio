import './Home.css'
// import React from 'react'

const Home = () => {
  return (
    <>
    <div style={{border:' solid #F5EFFF'}} id='home' className='container-fluid text-center '>
        <p style={{color:'#8D77AB', marginTop:'150px'}} className="text-center fs-1 fw-bolder">HEY, I&apos;M GAURI SANTHOSH</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum exercitationem expedita, atque cum odio.</p>
        <button className="naviButton"><a style={{backgroundColor:'transparent', color:'white'}} href="#projects" className='text-decoration-none'>Projects</a></button>
        <div className="socials">
            <ul className='underorder'>
                <li style={{backgroundColor:'transparent'}}><a href=""><i className="fa-brands fa-linkedin-in icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                <li style={{backgroundColor:'transparent'}}><a href=""><i className="fa-brands fa-github icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
                <li style={{backgroundColor:'transparent'}}><a href=""><i className="fa-brands fa-dev icons my-3" style={{backgroundColor:'transparent'}}></i></a></li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Home