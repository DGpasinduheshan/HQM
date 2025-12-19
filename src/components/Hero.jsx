import React from 'react'
import hero from '../assets/Online Doctor-cuate 1.png'

export default function Hero({ setActiveView }){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">Hospital Queue Management System</h1>
          <p className="hero-sub">Streamline patient check-in and reduce waiting times with our comprehensive digital queue management solution.</p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => setActiveView('register')}>Register Patient</button>
            <button className="btn btn-outline" onClick={() => setActiveView('queue')}>View Queue</button>
          </div>
        </div>
        <div className="hero-art">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}
