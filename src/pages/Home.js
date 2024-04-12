import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assests/Pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Hurry Up!</h1>
        <p>Fire and Sliced pizza's from the Oven</p>
        <Link to ="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
