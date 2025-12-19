import React from 'react'
import logo from '../assets/logo.png'

export default function Header({ activeView, setActiveView }){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo" onClick={() => setActiveView('home')} style={{cursor: 'pointer'}}>
          <img src={logo} alt="Hospital Logo" className="logo-img"/>
        </div>
        <nav className="nav">
          <button onClick={() => setActiveView('register')} className={activeView === 'register' ? 'nav-link active' : 'nav-link'}>Register</button>
          <button onClick={() => setActiveView('token')} className={activeView === 'token' ? 'nav-link active' : 'nav-link'}>Token</button>
          <button onClick={() => setActiveView('queue')} className={activeView === 'queue' ? 'nav-link active' : 'nav-link'}>Queue</button>
          <button onClick={() => setActiveView('doctor')} className={activeView === 'doctor' ? 'nav-link active' : 'nav-link'}>Doctor</button>
          <button onClick={() => setActiveView('feedback')} className={activeView === 'feedback' ? 'nav-link active' : 'nav-link'}>Feedback</button>
        </nav>
      </div>
    </header>
  )
}
