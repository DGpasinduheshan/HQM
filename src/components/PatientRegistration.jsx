import React, { useState } from 'react'
import medicalCareImg from '../assets/Medical care-pana (1) 1.png'

export default function PatientRegistration({ patients, setPatients, queue, setQueue, setActiveView }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    visitReason: '',
    doctor: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPatient = {
      id: Date.now(),
      ...formData,
      tokenNumber: queue.length + 1,
      status: 'waiting',
      registeredAt: new Date().toLocaleTimeString()
    }
    setPatients([...patients, newPatient])
    setQueue([...queue, newPatient])
    alert(`Registration successful! Token Number: ${newPatient.tokenNumber}`)
    setFormData({ name: '', age: '', gender: '', phone: '', email: '', visitReason: '', doctor: '' })
    setActiveView('token')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="ui-section">
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center'}}>
          <div className="ui-card">
            <h2 className="ui-title">Patient Registration</h2>
            <p className="ui-subtitle">Enter your personal and visit details</p>
            <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Sarah Johnson" />
              </div>
              <div className="form-group">
                <label>Age *</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="28" min="1" max="120" className="form-input" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(555) 123-4567" pattern="[0-9()\s-]+" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label>Email (Optional)</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="sarah.johnson@email.com" className="form-input" />
            </div>
            <div className="form-group">
              <label>Reason for Visit *</label>
              <textarea name="visitReason" value={formData.visitReason} onChange={handleChange} required placeholder="Describe your symptoms or reason for visit"></textarea>
            </div>
            <div className="form-group">
              <label>Preferred Doctor *</label>
              <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith - General Physician</option>
                <option value="Dr. Johnson">Dr. Johnson - Cardiologist</option>
                <option value="Dr. Williams">Dr. Williams - Pediatrician</option>
                <option value="Dr. Brown">Dr. Brown - Orthopedic</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-large">Register & Generate Token</button>
          </form>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={medicalCareImg} alt="Medical Care" style={{width: '100%', maxWidth: '500px', height: 'auto', animation: 'float 3s ease-in-out infinite'}} />
        </div>
      </div>
      </div>
    </section>
  )
}
