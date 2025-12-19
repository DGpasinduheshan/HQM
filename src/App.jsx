import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import PatientRegistration from './components/PatientRegistration'
import TokenGeneration from './components/TokenGeneration'
import QueueStatus from './components/QueueStatus'
import DoctorCheckIn from './components/DoctorCheckIn'
import Feedback from './components/Feedback'

export default function App(){
  const [activeView, setActiveView] = useState('home')
  const [patients, setPatients] = useState([])
  const [queue, setQueue] = useState([])
  const [feedbacks, setFeedbacks] = useState([])

  return (
    <div className="app-root">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main>
        {activeView === 'home' && <Hero setActiveView={setActiveView} />}
        {activeView === 'register' && <PatientRegistration patients={patients} setPatients={setPatients} setQueue={setQueue} queue={queue} setActiveView={setActiveView} />}
        {activeView === 'token' && <TokenGeneration queue={queue} />}
        {activeView === 'queue' && <QueueStatus queue={queue} />}
        {activeView === 'doctor' && <DoctorCheckIn queue={queue} setQueue={setQueue} />}
        {activeView === 'feedback' && <Feedback feedbacks={feedbacks} setFeedbacks={setFeedbacks} />}
      </main>
      <Footer />
    </div>
  )
}
