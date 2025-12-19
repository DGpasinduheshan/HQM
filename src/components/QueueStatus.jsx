import React from 'react'
import medicalPrescription from '../assets/Medical prescription-amico 1.png'
import medicalCare from '../assets/Medical care-pana (1) 1.png'
import onlineDoctor from '../assets/Online Doctor-cuate 1.png'
import rectangle3 from '../assets/Rectangle 3.png'

export default function QueueStatus({ queue }) {
  const waitingPatients = queue.filter(p => p.status === 'waiting')
  const inProgressPatients = queue.filter(p => p.status === 'in-progress')
  const completedPatients = queue.filter(p => p.status === 'completed')

  return (
    <section className="ui-section">
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start'}}>
          <div className="ui-card">
            <h2 className="ui-title">Queue Status</h2>
            <p className="ui-subtitle">Real-time view of patient queue</p>
            
            <div className="queue-stats">
              <div className="stat-card">
                <div className="stat-number">{waitingPatients.length}</div>
                <div className="stat-label">Waiting</div>
              </div>
              <div className="stat-card stat-progress">
                <div className="stat-number">{inProgressPatients.length}</div>
                <div className="stat-label">In Progress</div>
              </div>
              <div className="stat-card stat-completed">
                <div className="stat-number">{completedPatients.length}</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>

            {queue.length === 0 ? (
              <div className="empty-state">
                <p>No patients in queue</p>
                <img src={rectangle3} alt="Empty" style={{width: '200px', margin: '20px auto', opacity: 0.5}} />
              </div>
            ) : (
              <div className="queue-list">
                <h3>Current Queue</h3>
                {queue.map((patient) => (
                  <div key={patient.id} className={`queue-item status-${patient.status}`}>
                    <div className="queue-token">#{patient.tokenNumber}</div>
                    <div className="queue-info">
                      <div className="queue-name">{patient.name}</div>
                      <div className="queue-doctor">{patient.doctor}</div>
                    </div>
                    <div className="queue-time">{patient.registeredAt}</div>
                    <div className={`queue-status status-${patient.status}`}>
                      {patient.status === 'waiting' && ' Waiting'}
                      {patient.status === 'in-progress' && ' In Progress'}
                      {patient.status === 'completed' && ' Completed'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '100px'}}>
            <img src={onlineDoctor} alt="Online Doctor" style={{width: '100%', height: 'auto', borderRadius: '16px'}} />
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              <img src={medicalPrescription} alt="Prescription" style={{width: '100%', height: 'auto', borderRadius: '12px', opacity: 0.7}} />
              <img src={medicalCare} alt="Care" style={{width: '100%', height: 'auto', borderRadius: '12px', opacity: 0.7}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
