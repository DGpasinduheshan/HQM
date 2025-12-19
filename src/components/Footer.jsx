import React from 'react'
import logo from '../assets/logo.png'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <img src={logo} alt="Hospital Logo" style={{width: '96px', height: '96px', objectFit: 'contain'}} />
          <span style={{color: 'var(--text-gray)', fontSize: '14px'}}> 2025 Hospital Queue Management System</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
