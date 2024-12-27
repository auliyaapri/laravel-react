import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'
import '../../../css/Landing/style.css'; // Import Tailwind CSS

const Index = ({ title }) => {
  return (
    <>
      <video src="https://videos.pexels.com/video-files/3209298/3209298-uhd_2560_1440_25fps.mp4" className="vid-bg" autoPlay loop muted></video>

      <div className="box">

        <h2>Login Form</h2>

        <div className="login-box">
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <div className="btn-area">Login</div>

        </div>
      </div>
    </>
  )
}

export default Index

