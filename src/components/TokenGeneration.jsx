import React from 'react'
import doctorImg from '../assets/photo_2025-11-22_12-28-34 1.png'
import prescriptionImg from '../assets/Medical prescription-amico 1.png'

export default function TokenGeneration({ queue }) {
  const latestPatient = queue[queue.length - 1]

  if (!latestPatient) {
    return (
      <section className="ui-section">
        <div className="container">
          <div className="ui-card">
            <h2 className="ui-title">Token Generation</h2>
            <p className="ui-subtitle">No tokens generated yet</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="ui-section">
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center'}}>
        <div className="ui-card token-card">
          <div className="token-success">
            <div className="success-icon"></div>
            <h2 className="ui-title">Registration Successful!</h2>
            <p className="ui-subtitle">Your token has been generated</p>
          </div>
          <div className="token-display">
            <div className="token-number">{latestPatient.tokenNumber}</div>
            <div className="token-label">Token Number</div>
          </div>
          <div className="token-details">
            <div className="detail-row">
              <span className="detail-label">Patient Name:</span>
              <span className="detail-value">{latestPatient.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Doctor:</span>
              <span className="detail-value">{latestPatient.doctor}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Registered At:</span>
              <span className="detail-value">{latestPatient.registeredAt}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className="detail-value status-waiting">{latestPatient.status}</span>
            </div>
          </div>
          <div className="token-instructions">
            <p> Please keep this token number safe</p>
            <p> Estimated wait time: {(latestPatient.tokenNumber - 1) * 15} minutes</p>
            <p> You will be notified when it is your turn</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <img src={doctorImg} alt="Doctor" style={{width: '100%', height: 'auto', borderRadius: '16px', boxShadow: 'var(--shadow-xl)'}} />
          <img src={prescriptionImg} alt="Prescription" style={{width: '100%', height: 'auto', borderRadius: '16px', opacity: 0.8}} />
        </div>
      </div>
      </div>
    </section>
  )
}
