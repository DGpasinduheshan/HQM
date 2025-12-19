import React, { useState } from 'react'
import rectangle7 from '../../assets/Rectangle 7.png'
import doctorImg from '../../assets/photo_2025-11-22_12-28-34 1.png'

export default function DoctorCheckIn({ queue, setQueue }) {
  const [selectedToken, setSelectedToken] = useState('')

  const handleCheckIn = (tokenNumber, newStatus) => {
    setQueue(queue.map(patient => 
      patient.tokenNumber === parseInt(tokenNumber)
        ? { ...patient, status: newStatus }
        : patient
    ))
    setSelectedToken('')
  }

  const waitingPatients = queue.filter(p => p.status === 'waiting')
  const inProgressPatients = queue.filter(p => p.status === 'in-progress')

  return (
    <section className="ui-section" style={{backgroundImage: `url(${rectangle7})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(249,250,251,0.95)'}}>
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '32px', alignItems: 'start'}}>
        <div style={{position: 'sticky', top: '100px'}}>
          <img src={doctorImg} alt="Doctor" style={{width: '100%', height: 'auto', borderRadius: '16px', boxShadow: 'var(--shadow-xl)'}} />
          <div style={{marginTop: '20px', padding: '20px', background: '#FFF', borderRadius: '12px', boxShadow: 'var(--shadow)'}}>
            <h3 style={{fontSize: '18px', marginBottom: '8px', color: 'var(--text-dark)'}}>Quick Stats</h3>
            <p style={{color: 'var(--text-gray)', fontSize: '14px'}}>Waiting: {waitingPatients.length}</p>
            <p style={{color: 'var(--text-gray)', fontSize: '14px'}}>In Progress: {inProgressPatients.length}</p>
          </div>
        </div>
        <div className="ui-card">
          <h2 className="ui-title">Doctor Check-In</h2>
          <p className="ui-subtitle">Mark patient attendance and update status</p>
          
          <div className="doctor-panel">
            <h3>Waiting Patients</h3>
            {waitingPatients.length === 0 ? (
              <div className="empty-state">No patients waiting</div>
            ) : (
              <div className="patient-grid">
                {waitingPatients.map(patient => (
                  <div key={patient.id} className="patient-card">
                    <div className="patient-header">
                      <div className="patient-token">Token #{patient.tokenNumber}</div>
                      <div className="patient-status"> Waiting</div>
                    </div>
                    <div className="patient-info">
                      <h4>{patient.name}</h4>
                      <p>Age: {patient.age} | Gender: {patient.gender}</p>
                      <p>Doctor: {patient.doctor}</p>
                      <p className="visit-reason">{patient.visitReason}</p>
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleCheckIn(patient.tokenNumber, 'in-progress')}
                    >
                      Start Consultation
                    </button>
                  </div>
                ))}
              </div>
            )}

            <h3 style={{marginTop: '32px'}}>In Progress</h3>
            {inProgressPatients.length === 0 ? (
              <div className="empty-state">No consultations in progress</div>
            ) : (
              <div className="patient-grid">
                {inProgressPatients.map(patient => (
                  <div key={patient.id} className="patient-card patient-card-progress">
                    <div className="patient-header">
                      <div className="patient-token">Token #{patient.tokenNumber}</div>
                      <div className="patient-status status-progress"> In Progress</div>
                    </div>
                    <div className="patient-info">
                      <h4>{patient.name}</h4>
                      <p>Age: {patient.age} | Gender: {patient.gender}</p>
                      <p>Doctor: {patient.doctor}</p>
                    </div>
                    <button 
                      className="btn btn-success"
                      onClick={() => handleCheckIn(patient.tokenNumber, 'completed')}
                    >
                      Mark as Completed
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
